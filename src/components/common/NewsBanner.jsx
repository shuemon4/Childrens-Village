import React from 'react';
import { useNews, NEWS_TYPES } from '../../context/NewsContext';

const NewsBanner = () => {
  const { getActiveNewsItems, removeNewsItem } = useNews();
  
  // Get active news items
  const activeNewsItems = getActiveNewsItems();
  
  // If there are no active news items, don't render anything
  if (activeNewsItems.length === 0) {
    return null;
  }
  
  return (
    <div className="news-banners">
      {activeNewsItems.map(item => (
        <div 
          key={item.id} 
          className={`relative py-3 px-4 mb-2 ${
            item.type === NEWS_TYPES.ALERT 
              ? 'bg-red-600 text-white' 
              : 'bg-blue-100 text-blue-800 border border-blue-200'
          }`}
        >
          <div className="container mx-auto">
            <div className="flex items-center">
              {/* Icon for alert news */}
              {item.type === NEWS_TYPES.ALERT && (
                <div className="mr-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                </div>
              )}
              
              {/* Icon for standard news */}
              {item.type === NEWS_TYPES.STANDARD && (
                <div className="mr-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                </div>
              )}
              
              {/* News message */}
              <div className="flex-1 text-center">
                <p className={`font-medium ${item.type === NEWS_TYPES.ALERT ? 'text-white' : 'text-blue-800'}`}>
                  {item.message}
                </p>
              </div>
              
              {/* Close button */}
              <button 
                onClick={() => removeNewsItem(item.id)}
                className={`ml-3 ${
                  item.type === NEWS_TYPES.ALERT 
                    ? 'text-white hover:text-gray-200' 
                    : 'text-blue-800 hover:text-blue-600'
                }`}
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsBanner;
