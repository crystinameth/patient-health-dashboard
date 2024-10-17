import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientDashboard from './components/PatientDashboard';
import AuthRequestDashboard from './components/AuthRequestDashboard';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); 
  };

  return (
    <Router>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Toaster position="top-right" />
      <div>
        <Routes>
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/authrequest-dashboard" element={<AuthRequestDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
