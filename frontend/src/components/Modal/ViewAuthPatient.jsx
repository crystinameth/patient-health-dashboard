import React from 'react';

const ViewAuthPatient = ({ modalOpen, setModalOpen, authRequest }) => {
    if (!modalOpen || !authRequest) return null; // Return null if modal is closed or authRequest is not available

    const handleClose = () => {
        setModalOpen(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={handleClose}></div>
            <div className="bg-white rounded-lg p-4 z-50 w-1/3">
                <h2 className="text-xl font-bold mb-4">Authorization Request for {authRequest.patientId.name}</h2>
                
                {/* Patient Details */}
                <h3 className="text-lg font-semibold">Patient Details</h3>
                <p><strong>ID:</strong> {authRequest.patientId._id}</p>
                <p><strong>Name:</strong> {authRequest.patientId.name}</p>
                <p><strong>Age:</strong> {authRequest.patientId.age}</p>
                <p><strong>Condition:</strong> {authRequest.patientId.condition}</p>
                <p><strong>Medical History:</strong> {authRequest.patientId.medicalHistory.join(', ')}</p>
                <p><strong>Treatment Plan:</strong> {authRequest.patientId.treatmentPlan}</p>

                {/* Auth Request Details */}
                <h3 className="text-lg font-semibold mt-4">Authorization Request Details</h3>
                <p><strong>Treatment Type:</strong> {authRequest.treatmentType}</p>
                <p><strong>Insurance Plan:</strong> {authRequest.insurancePlan}</p>
                <p><strong>Diagnosis Code:</strong> {authRequest.diagnosisCode}</p>
                <p><strong>Doctor's Notes:</strong> {authRequest.doctorNotes}</p>
                <p><strong>Status:</strong> {authRequest.status}</p>

                <button onClick={handleClose} className="mt-4 btn">Close</button>
            </div>
        </div>
    );
};

export default ViewAuthPatient;
