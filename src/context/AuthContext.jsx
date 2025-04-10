
import React, { createContext, useState, useContext, useEffect } from 'react';
import { login } from '../api';
import { auth } from '../firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Listen for Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Get the user's custom claims and additional info from localStorage or Firestore
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          try {
            const userData = JSON.parse(storedUser);
            setUser({
              id: firebaseUser.uid,
              email: firebaseUser.email,
              ...userData
            });
          } catch (err) {
            console.error('Error parsing stored user:', err);
            // Fallback to basic user info
            setUser({
              id: firebaseUser.uid,
              email: firebaseUser.email
            });
          }
        } else {
          // Fallback to basic user info
          setUser({
            id: firebaseUser.uid,
            email: firebaseUser.email
          });
        }
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginUser = async (credentials) => {
    setError(null);
    try {
      const response = await login(credentials);
      const { token, user } = response.data;
      
      // Store additional user data
      localStorage.setItem('user', JSON.stringify(user));
      
      return user;
    } catch (err) {
      setError(err.message || 'Login failed');
      throw err;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('user');
      setUser(null);
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const isAdmin = () => {
    return user && user.isAdmin;
  };

  const value = {
    user,
    loading,
    error,
    login: loginUser,
    logout,
    isAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
