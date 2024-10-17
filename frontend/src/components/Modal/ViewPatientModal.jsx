import React from 'react';

const PatientModal = ({ modalOpen, setModalOpen, patient }) => {
    if (!modalOpen) return null;

    const handleClose = () => {
        setModalOpen(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={handleClose}></div>
            <div className="bg-white rounded-lg p-4 z-50 w-1/3">
                <h2 className="text-xl font-bold mb-4">{patient.name}'s Details</h2>
                <p><strong>Age:</strong> {patient.age}</p>
                <p><strong>Condition:</strong> {patient.condition}</p>
                <p><strong>Medical History:</strong> {patient.medicalHistory.join(', ')}</p>
                <p><strong>Treatment Plan:</strong> {patient.treatmentPlan}</p>
                <button onClick={handleClose} className="mt-4 btn">Close</button>
            </div>
        </div>
    );
};

export default PatientModal;
