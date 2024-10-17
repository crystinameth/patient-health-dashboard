import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaClipboardList, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'; 

const Header = ({ toggleDarkMode, darkMode }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = (path) =>
    location.pathname === path
      ? 'text-blue-500 dark:text-blue-300 font-bold border-b-2 border-blue-500'
      : 'text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300';

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 shadow">
      <div>
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">Basys.ai CareSync</h1>
      <h1 className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-white">Project By Shivi Mishra</h1>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-800 dark:text-white" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Navigation Links */}
      <nav className={`md:flex items-center space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
        <Link
          to="/patient-dashboard"
          className={`flex items-center ${linkClass('/patient-dashboard')}`}
          onClick={toggleMenu} // Close menu on link click
        >
          <FaUser className="mr-2" /> Patient Dashboard
        </Link>

        <div className="border-l-2 border-gray-300 dark:border-gray-600 h-6"></div> 

        <Link
          to="/authrequest-dashboard"
          className={`flex items-center ${linkClass('/authrequest-dashboard')}`}
          onClick={toggleMenu} // Close menu on link click
        >
          <FaClipboardList className="mr-2" /> AuthRequest
        </Link>

        {/* Dark Mode Toggle Icon in Mobile Menu */}
        <button
          onClick={toggleDarkMode}
          className="flex items-center mt-4 md:mt-0"
        >
          {darkMode ? (
            <FaSun className="text-yellow-500" size={24} />
          ) : (
            <FaMoon className="text-gray-800 dark:text-white" size={24} />
          )}
        </button>
      </nav>

      {/* Desktop Dark Mode Button */}
      {/* <button
        onClick={toggleDarkMode}
        className="hidden md:block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button> */}
    </header>
  );
};

export default Header;
