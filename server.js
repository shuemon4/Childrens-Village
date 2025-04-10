
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Firebase Admin
const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, 'base64').toString('utf-8')
);

const firebaseAdmin = initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const auth = getAuth();

// Collections
const usersCollection = db.collection('users');
const newsCollection = db.collection('news');
const eventsCollection = db.collection('events');

// Auth middleware
const authMiddleware = async (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

const adminMiddleware = (req, res, next) => {
  if (!req.user.isAdmin) return res.status(403).json({ msg: 'Access denied, admin privileges required' });
  next();
};

// Routes
// Auth routes
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const userQuery = await usersCollection.where('username', '==', username).limit(1).get();
    
    if (userQuery.empty) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    
    const userDoc = userQuery.docs[0];
    const userData = userDoc.data();
    
    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
    
    const token = jwt.sign(
      { id: userDoc.id, isAdmin: userData.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    
    res.json({ 
      token, 
      user: { 
        id: userDoc.id, 
        username: userData.username, 
        isAdmin: userData.isAdmin 
      } 
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// News routes
app.get('/api/news', async (req, res) => {
  try {
    const now = new Date();
    const newsSnapshot = await newsCollection
      .where('expiration', '>', now)
      .orderBy('expiration', 'asc')
      .orderBy('createdAt', 'desc')
      .get();

    const news = [];
    newsSnapshot.forEach(doc => {
      news.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate(),
        expiration: doc.data().expiration?.toDate() || null
      });
    });
    
    res.json(news);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/api/news', [authMiddleware, adminMiddleware], async (req, res) => {
  const { title, content, type, expiration } = req.body;
  
  try {
    const newsRef = await newsCollection.add({
      title,
      content,
      type,
      expiration: expiration ? new Date(expiration) : null,
      createdAt: new Date()
    });
    
    const newsDoc = await newsRef.get();
    
    res.json({
      id: newsDoc.id,
      ...newsDoc.data(),
      createdAt: newsDoc.data().createdAt.toDate(),
      expiration: newsDoc.data().expiration?.toDate() || null
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.delete('/api/news/:id', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    await newsCollection.doc(req.params.id).delete();
    res.json({ msg: 'News removed' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Calendar routes
app.get('/api/events', async (req, res) => {
  try {
    const eventsSnapshot = await eventsCollection
      .orderBy('startDate', 'asc')
      .get();
    
    const events = [];
    eventsSnapshot.forEach(doc => {
      events.push({
        id: doc.id,
        ...doc.data(),
        startDate: doc.data().startDate.toDate(),
        endDate: doc.data().endDate.toDate(),
        createdAt: doc.data().createdAt.toDate()
      });
    });
    
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/api/events', [authMiddleware, adminMiddleware], async (req, res) => {
  const { title, description, startDate, endDate, allDay } = req.body;
  
  try {
    const eventRef = await eventsCollection.add({
      title,
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      allDay,
      createdAt: new Date()
    });
    
    const eventDoc = await eventRef.get();
    
    res.json({
      id: eventDoc.id,
      ...eventDoc.data(),
      startDate: eventDoc.data().startDate.toDate(),
      endDate: eventDoc.data().endDate.toDate(),
      createdAt: eventDoc.data().createdAt.toDate()
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.put('/api/events/:id', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const eventRef = eventsCollection.doc(req.params.id);
    
    // Format dates if they exist in the request
    if (req.body.startDate) {
      req.body.startDate = new Date(req.body.startDate);
    }
    if (req.body.endDate) {
      req.body.endDate = new Date(req.body.endDate);
    }
    
    await eventRef.update(req.body);
    
    const updatedDoc = await eventRef.get();
    const eventData = updatedDoc.data();
    
    res.json({
      id: updatedDoc.id,
      ...eventData,
      startDate: eventData.startDate.toDate(),
      endDate: eventData.endDate.toDate(),
      createdAt: eventData.createdAt.toDate()
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.delete('/api/events/:id', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    await eventsCollection.doc(req.params.id).delete();
    res.json({ msg: 'Event removed' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Initial setup route (create admin user)
app.post('/api/setup', async (req, res) => {
  const { username, password, setupKey } = req.body;
  
  // Verify setup key (for initial admin creation security)
  if (setupKey !== process.env.SETUP_KEY) {
    return res.status(400).json({ msg: 'Invalid setup key' });
  }
  
  try {
    const userQuery = await usersCollection.where('username', '==', username).limit(1).get();
    if (!userQuery.empty) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    await usersCollection.add({
      username,
      password: hashedPassword,
      isAdmin: true,
      createdAt: new Date()
    });
    
    res.json({ msg: 'Admin user created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
