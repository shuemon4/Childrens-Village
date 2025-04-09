import { NEWS_TYPES } from '../context/NewsContext';

// Function to add initial news items to the context
export const addInitialNews = (addNewsItem) => {
  // Standard news item
  addNewsItem(
    "Enrollment for Fall 2025 is now open! Limited spots available.",
    NEWS_TYPES.STANDARD,
    // Set expiration date to 30 days from now
    new Date(new Date().setDate(new Date().getDate() + 30)).toISOString()
  );
  
  // Alert news item (commented out by default)
  // Uncomment to see an alert banner
  /*
  addNewsItem(
    "School closed tomorrow (April 8) due to inclement weather. Stay safe!",
    NEWS_TYPES.ALERT,
    // Set expiration date to 1 day from now
    new Date(new Date().setDate(new Date().getDate() + 1)).toISOString()
  );
  */
};
