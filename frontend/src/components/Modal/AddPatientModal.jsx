import React, { useState } from 'react';
import { toast } from 'react-hot-toast'; 

const AddPatientModal = ({ modalOpen, setModalOpen, handleAddPatient }) => {
    const [patientData, setPatientData] = useState({
        name: '',
        age: '',
        condition: '',
        medicalHistory: [],
        treatmentPlan: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatientData({
            ...patientData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddPatient(patientData);

        // Show success toast notification
        toast.success('Patient successfully added!');

        // Reset form
        setPatientData({
            name: '',
            age: '',
            condition: '',
            medicalHistory: [],
            treatmentPlan: ''
        });

        // Close the modal
        setModalOpen(false);
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center ${modalOpen ? '' : 'hidden'}`}>
            {/* Background Overlay */}
            <div className="fixed inset-0 bg-black opacity-50" onClick={() => setModalOpen(false)}></div>

            {/* Modal Content */}
            <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg shadow-lg p-8 z-50 w-full max-w-3xl mx-4 sm:mx-auto relative">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-100">
                    Add New Patient
                </h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={patientData.name}
                                onChange={handleChange}
                                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-400"
                                placeholder="Enter patient's name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Age</label>
                            <input
                                type="number"
                                name="age"
                                value={patientData.age}
                                onChange={handleChange}
                                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-400"
                                placeholder="Enter patient's age"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">Condition</label>
                        <input
                            type="text"
                            name="condition"
                            value={patientData.condition}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-400"
                            placeholder="Enter condition"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">Medical History</label>
                        <input
                            type="text"
                            name="medicalHistory"
                            value={patientData.medicalHistory.join(', ')} // Join for display
                            onChange={(e) => setPatientData({ ...patientData, medicalHistory: e.target.value.split(', ') })} // Split to array
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-400"
                            placeholder="Enter medical history, separate with commas"
                            required
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Separate multiple entries with commas.</p>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">Treatment Plan</label>
                        <input
                            type="text"
                            name="treatmentPlan"
                            value={patientData.treatmentPlan}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-400"
                            placeholder="Enter treatment plan"
                            required
                        />
                    </div>

                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                            onClick={() => setModalOpen(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                        >
                            Add Patient
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPatientModal;
