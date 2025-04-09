import React, { useState } from 'react';
import { useNews, NEWS_TYPES } from '../context/NewsContext';

const AdminNews = () => {
  const { newsItems, addNewsItem, removeNewsItem, clearAllNews } = useNews();
  
  // Form state
  const [message, setMessage] = useState('');
  const [newsType, setNewsType] = useState(NEWS_TYPES.STANDARD);
  const [expirationDate, setExpirationDate] = useState('');
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!message.trim()) {
      alert('Please enter a message');
      return;
    }
    
    // Add news item
    addNewsItem(
      message, 
      newsType, 
      expirationDate ? new Date(expirationDate).toISOString() : null
    );
    
    // Reset form
    setMessage('');
    setNewsType(NEWS_TYPES.STANDARD);
    setExpirationDate('');
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'No expiration';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">News Management</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Add, edit, and remove news and alerts for the school website.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Add News Form */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Add New Announcement</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    rows="3"
                    required
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="newsType" className="block text-gray-700 font-medium mb-2">
                      Announcement Type
                    </label>
                    <select
                      id="newsType"
                      value={newsType}
                      onChange={(e) => setNewsType(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value={NEWS_TYPES.STANDARD}>Standard News</option>
                      <option value={NEWS_TYPES.ALERT}>Alert (Weather/Emergency)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="expirationDate" className="block text-gray-700 font-medium mb-2">
                      Expiration Date (Optional)
                    </label>
                    <input
                      type="datetime-local"
                      id="expirationDate"
                      value={expirationDate}
                      onChange={(e) => setExpirationDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded-lg"
                  >
                    Add Announcement
                  </button>
                </div>
              </form>
            </div>
            
            {/* Current News List */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-heading font-bold">Current Announcements</h2>
                
                {newsItems.length > 0 && (
                  <button
                    onClick={clearAllNews}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-sm"
                  >
                    Clear All
                  </button>
                )}
              </div>
              
              {newsItems.length === 0 ? (
                <p className="text-gray-500 italic">No announcements currently active.</p>
              ) : (
                <div className="space-y-4">
                  {newsItems.map(item => (
                    <div 
                      key={item.id} 
                      className={`p-4 rounded-lg border ${
                        item.type === NEWS_TYPES.ALERT 
                          ? 'bg-red-50 border-red-200' 
                          : 'bg-blue-50 border-blue-200'
                      }`}
                    >
                      <div className="flex justify-between">
                        <div>
                          <span className={`inline-block px-2 py-1 text-xs font-bold rounded-full mb-2 ${
                            item.type === NEWS_TYPES.ALERT 
                              ? 'bg-red-600 text-white' 
                              : 'bg-blue-600 text-white'
                          }`}>
                            {item.type === NEWS_TYPES.ALERT ? 'ALERT' : 'NEWS'}
                          </span>
                          <p className="text-gray-800 font-medium">{item.message}</p>
                          <div className="mt-2 text-sm text-gray-500">
                            <p>Created: {formatDate(item.createdAt)}</p>
                            <p>Expires: {formatDate(item.expirationDate)}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeNewsItem(item.id)}
                          className="text-gray-500 hover:text-gray-700"
                          aria-label="Remove news item"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminNews;
