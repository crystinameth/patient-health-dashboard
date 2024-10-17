import React from 'react';

const PatientTableItem = ({ num, patient, setSelectedPatient, setModalOpen }) => {
    const handleView = () => {
        setSelectedPatient(patient);  // Set selected patient data for modal
        setModalOpen(true);  // Open the modal
    };

    return (
        <tr className='border-t-2 border-gray-200'>
            <td className="px-2 py-4 whitespace-nowrap text-center">
                {num}.
            </td>
            <td className="px-2 py-4 whitespace-nowrap text-center">
                {patient.name}
            </td>
            <td className="px-2 py-4 whitespace-nowrap text-center">
                {patient.age}
            </td>
            <td className="px-2 py-4 whitespace-nowrap text-center">
                {patient.condition}
            </td>
            <td className="px-2 py-4 whitespace-nowrap text-center">
                <button 
                    onClick={handleView} 
                    className="text-brand underline">
                    View
                </button>
            </td>
        </tr>
    );
};

export default PatientTableItem;
