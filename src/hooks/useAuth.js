import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('kymond-user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse user from localStorage', e);
      }
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const userData = { 
            id: 1, 
            name: email.split('@')[0], 
            email, 
            role: 'customer',
            createdAt: new Date().toISOString()
          };
          
          setUser(userData);
          localStorage.setItem('kymond-user', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('Email atau password salah'));
        }
      }, 500);
    });
  };

  const register = (name, email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password) {
          const userData = { 
            id: Math.floor(Math.random() * 1000), 
            name, 
            email, 
            role: 'customer',
            createdAt: new Date().toISOString()
          };
          
          setUser(userData);
          localStorage.setItem('kymond-user', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('Semua field harus diisi'));
        }
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kymond-user');
    localStorage.removeItem('kymond-cart');
    localStorage.removeItem('kymond-wishlist');
  };

  const isAdmin = () => {
    return user?.role === 'admin';
  };

  return {
    user,
    loading,
    login,
    register,
    logout,
    isAdmin
  };
};