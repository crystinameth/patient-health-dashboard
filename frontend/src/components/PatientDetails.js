import React from 'react';

const PatientDetail = ({ patient }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl">{patient.name}</h2>
      <p>Age: {patient.age}</p>
      <p>Condition: {patient.condition}</p>
      {/* Additional patient details can be added here */}
    </div>
  );
};

export default PatientDetail;
