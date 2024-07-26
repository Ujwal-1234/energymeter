import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FiHome, FiDollarSign, FiInfo, FiMenu } from 'react-icons/fi'; // Importing icons from react-icons

import About from './components/About';
import Bill from './components/Bill';
import Home from './components/Home';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Router>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Mobile Navigation Button */}
        <div className="md:hidden bg-gray-200 w-full">
          <button
            className="p-4 flex items-center justify-center"
            onClick={toggleSidebar}
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>
        {/* Sidebar */}
        <div
          className={`bg-gray-200 w-full md:w-1/5 ${
            showSidebar ? 'block' : 'hidden'
          } md:block`}
        >
          <nav className="p-4">
            <ul>
              <li>
                <Link
                  to="/"
                  className="flex items-center p-2 hover:bg-gray-300 rounded-lg"
                >
                  <FiHome className="mr-2" /> {/* Home icon */}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/bill"
                  className="flex items-center p-2 hover:bg-gray-300 rounded-lg"
                >
                  <FiDollarSign className="mr-2" /> {/* Dollar sign icon */}
                  Bill
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center p-2 hover:bg-gray-300 rounded-lg"
                >
                  <FiInfo className="mr-2" /> {/* Info icon */}
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Content */}
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/bill" element={<Bill />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
