
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://your-mongodb-connection-string')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Models
const User = mongoose.model('User', new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
}));

const News = mongoose.model('News', new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  type: { type: String, default: 'standard' },
  expiration: { type: Date },
  createdAt: { type: Date, default: Date.now }
}));

const Event = mongoose.model('Event', new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  allDay: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
}));

// Auth middleware
const authMiddleware = (req, res, next) => {
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
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
    
    const token = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    
    res.json({ token, user: { id: user.id, username: user.username, isAdmin: user.isAdmin } });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// News routes
app.get('/api/news', async (req, res) => {
  try {
    const news = await News.find({ 
      $or: [
        { expiration: { $gt: new Date() } },
        { expiration: null }
      ]
    }).sort({ createdAt: -1 });
    res.json(news);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/api/news', [authMiddleware, adminMiddleware], async (req, res) => {
  const { title, content, type, expiration } = req.body;
  
  try {
    const news = new News({
      title,
      content,
      type,
      expiration: expiration || null
    });
    
    const savedNews = await news.save();
    res.json(savedNews);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.delete('/api/news/:id', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ msg: 'News removed' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Calendar routes
app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find().sort({ startDate: 1 });
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/api/events', [authMiddleware, adminMiddleware], async (req, res) => {
  const { title, description, startDate, endDate, allDay } = req.body;
  
  try {
    const event = new Event({
      title,
      description,
      startDate,
      endDate,
      allDay
    });
    
    const savedEvent = await event.save();
    res.json(savedEvent);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.put('/api/events/:id', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.delete('/api/events/:id', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
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
    let user = await User.findOne({ username });
    if (user) return res.status(400).json({ msg: 'User already exists' });
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    user = new User({
      username,
      password: hashedPassword,
      isAdmin: true
    });
    
    await user.save();
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
