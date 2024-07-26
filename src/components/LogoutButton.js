// components/LogoutButton.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Adjust the import path if needed

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Destructure logout function from AuthContext

  const handleLogout = async () => {
    try {
      // Call the backend API to log out
      await fetch('http://localhost:3000/api/auth/logout', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      // Remove token from local storage
      localStorage.removeItem('token');
      // Update authentication state
      logout();
      // Redirect to signin page
      navigate('/signin');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <button
      type="button"
      className="bg-slate-800 shadow-lg w-full text-white rounded-lg p-2"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
