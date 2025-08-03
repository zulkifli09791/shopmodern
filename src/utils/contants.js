// API Endpoints
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';

// Local Storage Keys
export const STORAGE_KEYS = {
  CART: 'kymond-cart',
  WISHLIST: 'kymond-wishlist',
  USER: 'kymond-user',
  DARK_MODE: 'kymond-dark-mode',
  LANGUAGE: 'kymond-language'
};

// App Configurations
export const APP_CONFIG = {
  name: 'KYMOND',
  description: 'Toko online modern dengan produk berkualitas terbaik',
  version: '1.0.0',
  currency: 'IDR',
  supportedLanguages: ['id', 'en'],
  defaultLanguage: 'id',
  theme: {
    primary: 'blue',
    secondary: 'purple',
    accent: 'yellow'
  }
};

// Payment Methods
export const PAYMENT_METHODS = [
  { id: 'bank_transfer', name: { id: 'Transfer Bank', en: 'Bank Transfer' }, icon: 'Bank' },
  { id: 'qris', name: { id: 'QRIS', en: 'QRIS' }, icon: 'QrCode' },
  { id: 'whatsapp', name: { id: 'WhatsApp', en: 'WhatsApp' }, icon: 'Message' },
  { id: 'cod', name: { id: 'Bayar di Tempat', en: 'Cash on Delivery' }, icon: 'Cash' }
];

// Order Statuses
export const ORDER_STATUSES = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
  RETURNED: 'returned'
};

// Shipping Options
export const SHIPPING_OPTIONS = [
  { 
    id: 'standard', 
    name: { id: 'Pengiriman Standar', en: 'Standard Shipping' }, 
    price: 10000, 
    estimatedDays: 3 
  },
  { 
    id: 'express', 
    name: { id: 'Pengiriman Cepat', en: 'Express Shipping' }, 
    price: 25000, 
    estimatedDays: 1 
  },
  { 
    id: 'free', 
    name: { id: 'Gratis Ongkir', en: 'Free Shipping' }, 
    price: 0, 
    estimatedDays: 5,
    minOrderValue: 100000
  }
];

// Notification Types
export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};

// Discount Codes
export const DISCOUNT_CODES = [
  { code: 'WELCOME20', discount: 20, valid: true, description: { id: 'Diskon 20% untuk pembelian pertama', en: '20% discount for first purchase' } },
  { code: 'FREESHIP', discount: 10000, valid: true, description: { id: 'Gratis ongkir', en: 'Free shipping' } },
  { code: 'HOLIDAY15', discount: 15, valid: true, description: { id: 'Diskon 15% untuk liburan', en: '15% holiday discount' } }
];

// Product Categories
export const PRODUCT_CATEGORIES = [
  'electronics',
  'fashion',
  'home',
  'beauty',
  'sports'
];

// User Roles
export const USER_ROLES = {
  CUSTOMER: 'customer',
  ADMIN: 'admin',
  MODERATOR: 'moderator'
};

// App Themes
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};