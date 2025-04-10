
import axios from 'axios';
import { db, auth } from '../firebase/config';
import { 
  collection, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  where, 
  serverTimestamp 
} from 'firebase/firestore';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from 'firebase/auth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

// Create axios instance for server API
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if available
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Auth API
export const login = async (credentials) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth, 
      credentials.email, 
      credentials.password
    );
    const user = userCredential.user;
    
    // Get additional user data from Firestore
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    const userData = userDoc.data();
    
    return {
      data: {
        token: await user.getIdToken(),
        user: {
          id: user.uid,
          username: userData.username,
          email: user.email,
          isAdmin: userData.isAdmin
        }
      }
    };
  } catch (error) {
    throw error;
  }
};

export const setupAdmin = async (data) => {
  try {
    const { username, email, password, setupKey } = data;
    
    // First, verify the setup key with your server
    const keyVerification = await api.post('/setup/verify-key', { setupKey });
    
    if (keyVerification.data.valid) {
      // Create the user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Add additional user data to Firestore
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        username,
        isAdmin: true,
        createdAt: serverTimestamp()
      });
      
      return {
        data: { 
          msg: 'Admin user created successfully' 
        }
      };
    } else {
      throw new Error('Invalid setup key');
    }
  } catch (error) {
    throw error;
  }
};

// News API
export const getAllNews = async () => {
  try {
    const currentDate = new Date();
    const newsQuery = query(
      collection(db, 'news'),
      where('expiration', '>', currentDate),
      orderBy('expiration', 'asc'),
      orderBy('createdAt', 'desc')
    );
    
    const newsSnapshot = await getDocs(newsQuery);
    const newsList = [];
    
    newsSnapshot.forEach(doc => {
      newsList.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        expiration: doc.data().expiration?.toDate()
      });
    });
    
    return {
      data: newsList
    };
  } catch (error) {
    throw error;
  }
};

export const createNews = async (newsData) => {
  try {
    const newsRef = await addDoc(collection(db, 'news'), {
      ...newsData,
      createdAt: serverTimestamp(),
      expiration: newsData.expiration ? new Date(newsData.expiration) : null
    });
    
    const newsDoc = await getDoc(newsRef);
    
    return {
      data: {
        id: newsDoc.id,
        ...newsDoc.data(),
        createdAt: newsDoc.data().createdAt?.toDate(),
        expiration: newsDoc.data().expiration?.toDate()
      }
    };
  } catch (error) {
    throw error;
  }
};

export const deleteNews = async (id) => {
  try {
    await deleteDoc(doc(db, 'news', id));
    return {
      data: { msg: 'News removed' }
    };
  } catch (error) {
    throw error;
  }
};

// Calendar API
export const getEvents = async () => {
  try {
    const eventsQuery = query(
      collection(db, 'events'),
      orderBy('startDate', 'asc')
    );
    
    const eventsSnapshot = await getDocs(eventsQuery);
    const eventsList = [];
    
    eventsSnapshot.forEach(doc => {
      eventsList.push({
        id: doc.id,
        ...doc.data(),
        startDate: doc.data().startDate.toDate(),
        endDate: doc.data().endDate.toDate(),
        createdAt: doc.data().createdAt.toDate()
      });
    });
    
    return {
      data: eventsList
    };
  } catch (error) {
    throw error;
  }
};

export const createEvent = async (eventData) => {
  try {
    const eventRef = await addDoc(collection(db, 'events'), {
      ...eventData,
      startDate: new Date(eventData.startDate),
      endDate: new Date(eventData.endDate),
      createdAt: serverTimestamp()
    });
    
    const eventDoc = await getDoc(eventRef);
    const data = eventDoc.data();
    
    return {
      data: {
        id: eventDoc.id,
        ...data,
        startDate: data.startDate.toDate(),
        endDate: data.endDate.toDate(),
        createdAt: data.createdAt.toDate()
      }
    };
  } catch (error) {
    throw error;
  }
};

export const updateEvent = async (id, eventData) => {
  try {
    const eventRef = doc(db, 'events', id);
    
    // Format dates if they exist in the request
    if (eventData.startDate) {
      eventData.startDate = new Date(eventData.startDate);
    }
    if (eventData.endDate) {
      eventData.endDate = new Date(eventData.endDate);
    }
    
    await updateDoc(eventRef, eventData);
    
    const updatedDoc = await getDoc(eventRef);
    const data = updatedDoc.data();
    
    return {
      data: {
        id: updatedDoc.id,
        ...data,
        startDate: data.startDate.toDate(),
        endDate: data.endDate.toDate(),
        createdAt: data.createdAt.toDate()
      }
    };
  } catch (error) {
    throw error;
  }
};

export const deleteEvent = async (id) => {
  try {
    await deleteDoc(doc(db, 'events', id));
    return {
      data: { msg: 'Event removed' }
    };
  } catch (error) {
    throw error;
  }
};

export default api;
