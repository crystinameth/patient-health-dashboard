import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientDashboard from './components/PatientDashboard';
import PriorAuthForm from './components/PriorAuthForm';
import Header from './components/Header';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check user's previous preference for dark mode from localStorage
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    // Apply dark mode based on state
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle the dark mode state
  };

  return (
    <Router>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="p-6">
        <Routes>
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/authrequest-dashboard" element={<PriorAuthForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
