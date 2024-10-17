import React from 'react';

const ViewAuthPatient = ({ modalOpen, setModalOpen, authRequest }) => {
  if (!modalOpen || !authRequest) return null;

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50" onClick={handleClose}></div>

      {/* Modal Content */}
      <div className="bg-white dark:bg-gray-800 dark:text-gray-300 rounded-lg shadow-lg p-6 z-50 w-full max-w-lg mx-4 sm:mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Authorization Request for {authRequest.patientId.name}
          </h2>
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
          <h3 className="text-lg font-semibold text-gray-700 dark:text-blue-400 underline">
            Patient Details
          </h3>
          <p><strong>ID:</strong> {authRequest.patientId._id}</p>
          <p><strong>Name:</strong> {authRequest.patientId.name}</p>
          <p><strong>Age:</strong> {authRequest.patientId.age}</p>
          <p><strong>Condition:</strong> {authRequest.patientId.condition}</p>
          <p><strong>Medical History:</strong> {authRequest.patientId.medicalHistory.join(', ')}</p>
          <p><strong>Treatment Plan:</strong> {authRequest.patientId.treatmentPlan}</p>
        </div>

        {/* Partition Line */}
        <hr className="my-4 border-gray-300 dark:border-gray-600" /> {/* Partition line */}

        {/* Auth Request Details */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-blue-400 underline">
            Authorization Request Details
          </h3>
          <p><strong>Treatment Type:</strong> {authRequest.treatmentType}</p>
          <p><strong>Insurance Plan:</strong> {authRequest.insurancePlan}</p>
          <p><strong>Diagnosis Code:</strong> {authRequest.diagnosisCode}</p>
          <p><strong>Doctor's Notes:</strong> {authRequest.doctorNotes}</p>
          <p><strong>Status:</strong> {authRequest.status}</p>
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

export default ViewAuthPatient;

