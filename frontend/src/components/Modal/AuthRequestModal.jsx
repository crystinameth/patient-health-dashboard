import React, { useState } from 'react';

const AddAuthRequestModal = ({ modalOpen, setModalOpen, handleAddAuthRequest }) => {
    const [authRequestData, setAuthRequestData] = useState({
        patientId: '',
        treatmentType: '',
        insurancePlan: '',
        dateOfService: '',
        diagnosisCode: '',
        doctorNotes: '',
        status: 'Pending' 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAuthRequestData({
            ...authRequestData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddAuthRequest(authRequestData);
        setModalOpen(false); // Close the modal after submission
        setAuthRequestData({
            patientId: '',
            treatmentType: '',
            insurancePlan: '',
            dateOfService: '',
            diagnosisCode: '',
            doctorNotes: '',
            status: 'Pending'
        }); 
    };
    

    return (
        <div className={`fixed inset-0 flex items-center justify-center ${modalOpen ? '' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Add New Authorization Request</h2>
                <form onSubmit={handleSubmit}>
                    {/* Patient ID */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Patient ID:</label>
                        <input
                            type="text"
                            name="patientId"
                            value={authRequestData.patientId}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Treatment Type */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Treatment Type:</label>
                        <input
                            type="text"
                            name="treatmentType"
                            value={authRequestData.treatmentType}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Insurance Plan */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Insurance Plan:</label>
                        <input
                            type="text"
                            name="insurancePlan"
                            value={authRequestData.insurancePlan}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Date of Service */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Date of Service:</label>
                        <input
                            type="date"
                            name="dateOfService"
                            value={authRequestData.dateOfService}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Diagnosis Code */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Diagnosis Code:</label>
                        <input
                            type="text"
                            name="diagnosisCode"
                            value={authRequestData.diagnosisCode}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Doctor Notes */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Doctor Notes:</label>
                        <textarea
                            name="doctorNotes"
                            value={authRequestData.doctorNotes}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                        />
                    </div>

                    {/* Status */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Status:</label>
                        <select
                            name="status"
                            value={authRequestData.status}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                        >
                            <option value="Pending">Pending</option>
                            <option value="Approved">Approved</option>
                            <option value="Denied">Denied</option>
                        </select>
                    </div>

                    {/* Submit & Cancel Buttons */}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="mr-2 px-4 py-2 bg-red-500 text-white rounded"
                            onClick={() => setModalOpen(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-500 text-white rounded"
                        >
                            Add Authorization Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAuthRequestModal;
