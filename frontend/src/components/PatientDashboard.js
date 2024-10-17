import React, { useEffect, useState } from 'react';
import { fetchPatients } from '../api';

const PatientDashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const getPatients = async () => {
      const data = await fetchPatients();
      setPatients(data);
    };

    getPatients();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Patient Dashboard</h1>
      <ul>
        {patients.map(patient => (
          <li key={patient._id}>
            {patient.name} - {patient.age} - {patient.condition}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientDashboard;
