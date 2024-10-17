import logo from './logo.svg';
import './App.css';
import React from 'react';
import PatientDashboard from './components/PatientDashboard';
import PriorAuthForm from './components/PriorAuthForm';

function App() {
  return (
    <div className="App">
      <PatientDashboard />
      <PriorAuthForm />
    </div>
  );
}

export default App;
