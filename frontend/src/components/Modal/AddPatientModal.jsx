import React, { useState } from 'react';

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
        setPatientData({  name: '', age: '', condition: '', medicalHistory: [], treatmentPlan: ''  }); // Reset form
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center ${modalOpen ? '' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Add New Patient</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={patientData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={patientData.age}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Condition</label>
                        <input
                            type="text"
                            name="condition"
                            value={patientData.condition}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Medical History</label>
                        <input
                            type="text"
                            name="medicalHistory"
                            value={patientData.medicalHistory.join(', ')} // Join for display
                            onChange={(e) => setPatientData({ ...patientData, medicalHistory: e.target.value.split(', ') })} // Split to array
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                        />
                        <p className="text-xs text-gray-500">Separate multiple entries with commas.</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Treatment Plan</label>
                        <input
                            type="text"
                            name="treatmentPlan"
                            value={patientData.treatmentPlan}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                        />
                    </div>
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
                            Add Patient
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPatientModal;
