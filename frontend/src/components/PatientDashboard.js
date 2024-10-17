import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPatient, getPatients, getPatientById } from '../redux/actions';
import PatientTable from './Table/PatientTable';
import PatientModal from './Modal/ViewPatientModal';
import AddPatientModal from './Modal/AddPatientModal';

const PatientDashboard = () => {
    const dispatch = useDispatch();
    const { patients, patient } = useSelector((state) => state.patients);
    const [searchQuery, setSearchQuery] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [addModalOpen, setAddModalOpen] = useState(false); 
    const [selectedPatient, setSelectedPatient] = useState(null);

    useEffect(() => {
        dispatch(getPatients()); 
    }, [dispatch]);

    const handleAddPatient = (newPatientData) => {
        dispatch(addPatient(newPatientData)); 
        setAddModalOpen(false); 
    };

    const handleSearch = () => {
        if (searchQuery) {
            dispatch(getPatientById(searchQuery)); 
        }
    };

    return (
        <>
            <div className="flex dark:bg-gray-900 bg-gray-100 font-primary h-screen overflow-hidden">
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <div className="px-4 sm:px-6 lg:px-8 py-6 w-full max-w-9xl mx-auto">
                        {/* Search and Add Patient Section */}
                        <div className="flex items-center space-x-2 mb-4">
                            <input
                                type="text"
                                placeholder="Search by Patient ID"
                                className="border border-gray-300 dark:bg-gray-800 dark:text-white p-2 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300 flex-grow"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow"
                                onClick={handleSearch} 
                            >
                                Search
                            </button>
                            <button
                                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded shadow"
                                onClick={() => setAddModalOpen(true)}
                            >
                                Add Patient
                            </button>
                        </div>

                        {/* Display Patient Details if available */}
                        {patient && (
                            <div className="bg-white dark:bg-gray-800 shadow rounded p-4 mb-4">
                                <h2 className="text-xl font-semibold dark:text-gray-200">Patient Details</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                                    <p className="dark:text-gray-300"><strong>Name:</strong> {patient.name}</p>
                                    <p className="dark:text-gray-300"><strong>Age:</strong> {patient.age}</p>
                                    <p className="dark:text-gray-300"><strong>Condition:</strong> {patient.condition}</p>
                                    <p className="dark:text-gray-300"><strong>Medical History:</strong> {patient.medicalHistory.join(', ')}</p>
                                    <p className="dark:text-gray-300"><strong>Treatment Plan:</strong> {patient.treatmentPlan}</p>
                                </div>
                            </div>
                        )}

                        {/* Display Patient Table */}
                        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 mb-6">
                            <div className="overflow-y-auto max-h-[60vh]">
                                {patients.length > 0 ? (
                                    <PatientTable 
                                        patients={patients} 
                                        setSelectedPatient={setSelectedPatient} 
                                        setModalOpen={setModalOpen}
                                    />
                                ) : (
                                    <div className='flex justify-center items-center text-xl pt-4 dark:text-gray-300'>
                                        <p>No patients found.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Modals for Viewing and Adding Patients */}
                        <PatientModal 
                            setModalOpen={setModalOpen} 
                            modalOpen={modalOpen}
                            patient={selectedPatient}
                        />
                        <AddPatientModal 
                            modalOpen={addModalOpen} 
                            setModalOpen={setAddModalOpen} 
                            handleAddPatient={handleAddPatient} 
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PatientDashboard;
