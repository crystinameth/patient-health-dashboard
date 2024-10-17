import React from 'react';

const PatientTableItem = ({ num, patient, setSelectedPatient, setModalOpen }) => {
    const handleView = () => {
        setSelectedPatient(patient);  // Set selected patient data for modal
        setModalOpen(true);  // Open the modal
    };

    return (
        <tr className='border-b border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200'>
            <td className="px-4 py-4 text-center text-gray-700 dark:text-gray-300 text-sm">{num}.</td>
            <td className="px-4 py-4 text-center text-gray-700 dark:text-gray-300 text-sm">{patient.name}</td>
            <td className="px-4 py-4 text-center text-gray-700 dark:text-gray-300 text-sm">{patient.age}</td>
            <td className="px-4 py-4 text-center text-gray-700 dark:text-gray-300 text-sm">{patient.condition}</td>
            <td className="px-4 py-4 text-center">
                <button 
                    onClick={handleView} 
                    className="text-blue-600 hover:text-blue-800 underline dark:text-blue-400 dark:hover:text-blue-300 transition duration-200">
                    View
                </button>
            </td>
        </tr>
    );
};

export default PatientTableItem;
