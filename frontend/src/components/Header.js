// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = ({ toggleDarkMode, darkMode }) => {
//   return (
//     <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 shadow">
//       <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Basys.ai Health Tracker</h1>

//       <nav className="flex space-x-4">
//         <Link
//           to="/patient-dashboard"
//           className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300"
//         >
//           Patient Dashboard
//         </Link>
//         <Link
//           to="/authrequest-dashboard"
//           className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300"
//         >
//           AuthRequest Dashboard
//         </Link>
//       </nav>

//       <button
//         onClick={toggleDarkMode}
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
//       >
//         {darkMode ? 'Light Mode' : 'Dark Mode'}
//       </button>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaClipboardList } from 'react-icons/fa'; // Ensure this is correctly installed

const Header = ({ toggleDarkMode, darkMode }) => {
  const location = useLocation();

  // Add conditional classes for active links
  const linkClass = (path) =>
    location.pathname === path
      ? 'text-blue-500 dark:text-blue-300 font-bold border-b-2 border-blue-500'
      : 'text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300';

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 shadow">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Basys.ai CareSync</h1>

      <nav className="flex items-center space-x-4">
        <Link
          to="/patient-dashboard"
          className={`flex items-center ${linkClass('/patient-dashboard')}`}
        >
          <FaUser className="mr-2" /> Patient Dashboard
        </Link>

        <div className="border-l-2 border-gray-300 dark:border-gray-600 h-6"></div> {/* Divider */}

        <Link
          to="/authrequest-dashboard"
          className={`flex items-center ${linkClass('/authrequest-dashboard')}`}
        >
          <FaClipboardList className="mr-2" /> AuthRequest Dashboard
        </Link>
      </nav>

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


