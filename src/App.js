// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { FiHome, FiDollarSign, FiInfo, FiMenu } from 'react-icons/fi';
import { useAuth } from './AuthContext'; // Import useAuth
import About from './components/About';
import Bill from './components/Bill';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ProtectedRoute from './ProtectedRoute';
import LogoutButton from './components/LogoutButton';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { isAuth } = useAuth(); // Access authentication status

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Router>
      <div className="flex flex-col md:flex-row h-screen">
        {isAuth && ( // Conditionally render based on authentication status
          <>
            {/* Mobile Navigation Button */}
            <div className="md:hidden bg-gray-200 flex items-center justify-between w-full">
              <button
                className="p-4 flex items-center justify-center"
                onClick={toggleSidebar}
              >
                <FiMenu className="text-2xl" />
              </button>
              <p>
                <LogoutButton />
              </p>
            </div>
            {/* Sidebar */}
            <div
              className={`bg-gray-200 w-full md:w-1/5 ${
                showSidebar ? 'block' : 'hidden'
              } md:block`}
            >
              <nav className="p-4 text-2xl">
                <ul>
                  <li>
                    <Link
                      to="/"
                      className="flex items-center p-2 hover:bg-gray-300 rounded-lg"
                    >
                      <FiHome className="mr-2" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/bill"
                      className="flex items-center p-2 hover:bg-gray-300 rounded-lg"
                    >
                      <FiDollarSign className="mr-2" />
                      Bill
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="flex items-center p-2 hover:bg-gray-300 rounded-lg"
                    >
                      <FiInfo className="mr-2" />
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="invisible lg:visible w-full bottom-0 p-2">
                <LogoutButton />
              </div>
            </div>
          </>
        )}
        {/* Content */}
        <div className="flex-grow">
          <Routes>
            {isAuth ? (
              <>
                <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/bill" element={<ProtectedRoute><Bill /></ProtectedRoute>} />
                <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<Navigate to="/signin" />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
