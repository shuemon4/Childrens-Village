
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

// Create axios instance
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
export const login = (credentials) => api.post('/login', credentials);
export const setupAdmin = (data) => api.post('/setup', data);

// News API
export const getAllNews = () => api.get('/news');
export const createNews = (newsData) => api.post('/news', newsData);
export const deleteNews = (id) => api.delete(`/news/${id}`);

// Calendar API
export const getEvents = () => api.get('/events');
export const createEvent = (eventData) => api.post('/events', eventData);
export const updateEvent = (id, eventData) => api.put(`/events/${id}`, eventData);
export const deleteEvent = (id) => api.delete(`/events/${id}`);

export default api;
