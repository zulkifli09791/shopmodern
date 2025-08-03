// Format currency
export const formatCurrency = (amount, currency = 'IDR') => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0
  }).format(amount);
};

// Format date
export const formatDate = (dateString, locale = 'id-ID') => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

// Truncate text
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Calculate discount percentage
export const calculateDiscount = (originalPrice, currentPrice) => {
  if (!originalPrice || !currentPrice) return 0;
  return Math.round((1 - currentPrice / originalPrice) * 100);
};

// Get average rating
export const getAverageRating = (ratings) => {
  if (!ratings || ratings.length === 0) return 0;
  const sum = ratings.reduce((acc, rating) => acc + rating, 0);
  return parseFloat((sum / ratings.length).toFixed(1));
};

// Generate random ID
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Check if object is empty
export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

// Deep clone object
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// Get product tags
export const getProductTags = (product) => {
  const tags = [];
  
  if (product.rating >= 4.5) tags.push('best-seller');
  if (product.stock > 50) tags.push('in-stock');
  if (product.originalPrice > product.price) tags.push('on-sale');
  if (product.tags && Array.isArray(product.tags)) {
    tags.push(...product.tags);
  }
  
  return [...new Set(tags)]; // Remove duplicates
};

// Translate text based on language
export const t = (text, language = 'id') => {
  if (typeof text === 'object' && text[language]) {
    return text[language];
  }
  return text;
};