import React, { useState } from 'react';
import { toast } from 'react-hot-toast'; // Import toast

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
        toast.success('Authorization request added successfully!'); // Show toast
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
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-8 rounded-lg shadow-lg max-w-lg w-full">

                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Add New Authorization Request</h2>
                <form onSubmit={handleSubmit}>
                    {/* Patient ID */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Patient ID:</label>
                        <input
                            type="text"
                            name="patientId"
                            value={authRequestData.patientId}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-400"
                            placeholder="Enter a valid Patient ID"
                            required
                        />
                    </div>

                    {/* Treatment Type */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Treatment Type:</label>
                        <input
                            type="text"
                            name="treatmentType"
                            value={authRequestData.treatmentType}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-400"
                            placeholder="Type of Treatment"
                            required
                        />
                    </div>

                    {/* Insurance Plan */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Insurance Plan:</label>
                        <input
                            type="text"
                            name="insurancePlan"
                            value={authRequestData.insurancePlan}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-400"
                            placeholder="Insurance Plan" 
                            required
                        />
                    </div>

                    {/* Date of Service */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date of Service:</label>
                        <input
                            type="date"
                            name="dateOfService"
                            value={authRequestData.dateOfService}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-400"
                            placeholder="Date of Service"
                            required
                        />
                    </div>

                    {/* Diagnosis Code */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Diagnosis Code:</label>
                        <input
                            type="text"
                            name="diagnosisCode"
                            value={authRequestData.diagnosisCode}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-400"
                            placeholder="Diagnosis Code of Patient"
                            required
                        />
                    </div>

                    {/* Doctor Notes */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Doctor Notes:</label>
                        <textarea
                            name="doctorNotes"
                            value={authRequestData.doctorNotes}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-400"
                            placeholder="Add Doctor's Note Here"
                        />
                    </div>

                    {/* Status */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status:</label>
                        <select
                            name="status"
                            value={authRequestData.status}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-400"
                            placeholder="Choose status"
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
                            className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            onClick={() => setModalOpen(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
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
