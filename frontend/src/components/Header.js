import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 shadow">
      {/* App Name */}
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">MyHealthApp</h1>

      {/* Navigation Links */}
      <nav className="flex space-x-4">
        <Link
          to="/patient-dashboard"
          className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300"
        >
          Patient Dashboard
        </Link>
        <Link
          to="/authrequest-dashboard"
          className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300"
        >
          AuthRequest Dashboard
        </Link>
      </nav>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;

