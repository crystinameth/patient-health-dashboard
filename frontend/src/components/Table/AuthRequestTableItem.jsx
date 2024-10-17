import React from 'react';

const AuthRequestTableItem = ({ num, authRequest, setSelectedAuthRequest, setModalOpen }) => {
    const handleView = () => {
        setSelectedAuthRequest(authRequest);  
        setModalOpen(true);  
    };

    return (
        <tr className='border-t-2 border-gray-200'>
            <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300">
                {num}.
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300">
                {authRequest.patientId.name} 
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300">
                {authRequest.treatmentType}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300">
                {authRequest.insurancePlan}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300">
                {authRequest.dateOfService ? new Date(authRequest.dateOfService).toLocaleDateString() : 'N/A'}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300">
                {authRequest.status}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300">
                <button 
                    onClick={handleView} 
                    className="text-blue-600 hover:text-blue-800 underline dark:text-blue-400 dark:hover:text-blue-300 transition duration-200">
                    View
                </button>
            </td>
        </tr>
    );
};

export default AuthRequestTableItem;
