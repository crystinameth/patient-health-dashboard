import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPatient, getPatients, getPatientById, setLoading } from '../redux/actions';
import PatientTable from './Table/PatientTable';
import PatientModal from './Modal/ViewPatientModal';
import AddPatientModal from './Modal/AddPatientModal';

const PatientDashboard = () => {
    const dispatch = useDispatch();
    const { patients, patient } = useSelector((state) => state);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [addModalOpen, setAddModalOpen] = useState(false); 
    const [selectedPatient, setSelectedPatient] = useState(null);

    useEffect(() => {
        dispatch(getPatients()); 
    }, [dispatch]);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
    };

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
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        {/* Search and Add Patient Section */}
                        <div className="flex items-center space-x-4 mb-4">
                            <input
                                type="text"
                                placeholder="Search by Patient ID"
                                className="border border-gray-300 dark:bg-gray-800 dark:text-white p-2 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded shadow-lg"
                                onClick={handleSearch} 
                            >
                                Search Patient
                            </button>
                            <button
                                className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded shadow-lg"
                                onClick={() => setAddModalOpen(true)}
                            >
                                Add New Patient
                            </button>
                        </div>

                        {/* Display the patient details if available */}
                        {patient && (
                            <div className="bg-white dark:bg-gray-800 shadow rounded p-4 mb-6">
                                <h2 className="text-xl font-semibold dark:text-gray-200">Patient Details</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                                    <p className="dark:text-gray-300"><strong>Name:</strong> {patient.name}</p>
                                    <p className="dark:text-gray-300"><strong>Age:</strong> {patient.age}</p>
                                    <p className="dark:text-gray-300"><strong>Condition:</strong> {patient.condition}</p>
                                    <p className="dark:text-gray-300"><strong>Medical History:</strong> {patient.medicalHistory.join(', ')}</p>
                                    <p className="dark:text-gray-300"><strong>Treatment Plan:</strong> {patient.treatmentPlan}</p>
                                </div>
                            </div>
                        )}

                        {/* Display the Patient Table */}
                        {patients.length > 0 ? (
                            <>
                                <PatientTable 
                                    patients={patients} 
                                    currentPage={currentPage}
                                    setSelectedPatient={setSelectedPatient} 
                                    setModalOpen={setModalOpen}
                                />
                                <div className="flex justify-between mt-4">
                                    <button
                                        className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded shadow-lg"
                                        onClick={handlePreviousPage}
                                        disabled={currentPage <= 1}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded shadow-lg"
                                        onClick={handleNextPage}
                                    >
                                        Next
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className='flex justify-center items-center text-xl pt-4 dark:text-gray-300'>
                                <p>No patients found.</p>
                            </div>
                        )}

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
