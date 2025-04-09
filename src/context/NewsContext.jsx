import React, { createContext, useState, useContext, useEffect } from 'react';
import { addInitialNews } from '../utils/initialNews';

// Create the context
const NewsContext = createContext();

// News types
export const NEWS_TYPES = {
  STANDARD: 'standard',
  ALERT: 'alert'
};

// Custom hook to use the news context
export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};

// Provider component
export const NewsProvider = ({ children }) => {
  // State for news items
  const [newsItems, setNewsItems] = useState([]);
  
  // For demo purposes, we'll load some initial news from localStorage if available
  useEffect(() => {
    const savedNews = localStorage.getItem('cvms_news');
    if (savedNews) {
      try {
        setNewsItems(JSON.parse(savedNews));
      } catch (error) {
        console.error('Error parsing saved news:', error);
        setNewsItems([]);
      }
    } else {
      // If no saved news, add some initial news items
      addInitialNews(addNewsItem);
    }
  }, []);
  
  // Save news to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cvms_news', JSON.stringify(newsItems));
  }, [newsItems]);
  
  // Add a new news item
  const addNewsItem = (message, type = NEWS_TYPES.STANDARD, expirationDate = null) => {
    const newItem = {
      id: Date.now(),
      message,
      type,
      expirationDate,
      createdAt: new Date().toISOString()
    };
    
    setNewsItems(prevItems => [...prevItems, newItem]);
    return newItem.id;
  };
  
  // Remove a news item by ID
  const removeNewsItem = (id) => {
    setNewsItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  // Update a news item
  const updateNewsItem = (id, updates) => {
    setNewsItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, ...updates } : item
      )
    );
  };
  
  // Get active news items (not expired)
  const getActiveNewsItems = () => {
    const now = new Date();
    return newsItems.filter(item => {
      if (!item.expirationDate) return true;
      return new Date(item.expirationDate) > now;
    });
  };
  
  // Clear all news
  const clearAllNews = () => {
    setNewsItems([]);
  };
  
  // The context value
  const value = {
    newsItems,
    addNewsItem,
    removeNewsItem,
    updateNewsItem,
    getActiveNewsItems,
    clearAllNews
  };
  
  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
