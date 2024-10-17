import React from 'react';

const PatientModal = ({ modalOpen, setModalOpen, patient }) => {
  if (!modalOpen) return null;

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50" onClick={handleClose}></div>

      {/* Modal Content */}
      <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg p-6 z-50 w-full max-w-lg mx-4 sm:mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{patient.name}'s Details</h2>
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 rounded-full transition duration-200"
          >
            Close
          </button>
        </div>

        {/* Patient Details */}
        <div className="mt-4 space-y-2">
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Condition:</strong> {patient.condition}</p>
          <p><strong>Medical History:</strong> {patient.medicalHistory.join(', ')}</p>
          <p><strong>Treatment Plan:</strong> {patient.treatmentPlan}</p>
        </div>

        {/* Close button at bottom for mobile friendliness */}
        {/* <button
          onClick={handleClose}
          className="mt-6 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200"
        >
          Close
        </button> */}
      </div>
    </div>
  );
};

export default PatientModal;

