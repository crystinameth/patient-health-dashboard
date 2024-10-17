import React from 'react';

const AuthRequestTableItem = ({ num, authRequest, setSelectedAuthRequest, setModalOpen }) => {
    const handleView = () => {
        setSelectedAuthRequest(authRequest);  // Set selected auth request data for modal
        setModalOpen(true);  // Open the modal
    };

    return (
        <tr className='border-t-2 border-gray-200'>
            <td className="px-2 py-4 whitespace-nowrap text-center">
                {num}.
            </td>
            <td className="px-2 py-4 whitespace-nowrap text-center">
                {authRequest.patientId.name} {/* Display Patient ID */}
            </td>
            <td className="px-2 py-4 whitespace-nowrap text-center">
                {authRequest.treatmentType}
            </td>
            <td className="px-2 py-4 whitespace-nowrap text-center">
                {authRequest.insurancePlan}
            </td>
            <td className="px-2 py-4 whitespace-nowrap text-center">
                {authRequest.dateOfService ? new Date(authRequest.dateOfService).toLocaleDateString() : 'N/A'}
            </td>
            <td className="px-2 py-4 whitespace-nowrap text-center">
                {authRequest.status}
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

export default AuthRequestTableItem;
