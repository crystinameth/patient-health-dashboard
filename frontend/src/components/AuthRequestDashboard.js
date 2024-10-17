import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthRequests, addAuthRequest } from '../redux/actions';
import AuthRequestTable from './Table/AuthRequestTable';
import AddAuthRequestModal from './Modal/AuthRequestModal';
import ViewAuthPatient from './Modal/ViewAuthPatient';

const AuthRequestDashboard = () => {
    const dispatch = useDispatch();
    const { authRequests, loading } = useSelector((state) => state.authRequests);
    
    const [selectedAuthRequest, setSelectedAuthRequest] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [addModalOpen, setAddModalOpen] = useState(false);

    useEffect(() => {
        dispatch(getAuthRequests());
    }, [dispatch]);

    const handleAddAuthRequest = async (newAuthRequest) => {
        await dispatch(addAuthRequest(newAuthRequest));
        dispatch(getAuthRequests());
        setAddModalOpen(false);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedAuthRequest(null); // Reset the selected request
    };

    return (
        <div className="flex dark:bg-gray-900 bg-gray-100 font-primary h-screen overflow-hidden">
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    <h1 className="text-2xl font-bold mb-4 text-center dark:text-gray-200">Authorization Requests</h1>

                    {/* Button to open the AddAuthRequestModal */}
                    <button
                        onClick={() => setAddModalOpen(true)}
                        className="mb-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded shadow"
                    >
                        Add New Authorization Request
                    </button>

                    {/* Handle Loading/Error State */}
                    {loading ? (
                        <p className="text-lg text-center dark:text-gray-300">Loading...</p>
                    ) : (
                        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 mb-6">
                            <div className="overflow-y-auto max-h-[60vh]"> 
                                <AuthRequestTable
                                    authRequests={authRequests}
                                    setSelectedAuthRequest={setSelectedAuthRequest}
                                    setModalOpen={setModalOpen}
                                />
                            </div>
                        </div>
                    )}

                    {/* Render the ViewAuthPatient Modal if an authRequest is selected */}
                    {selectedAuthRequest && modalOpen && (
                        <ViewAuthPatient
                            modalOpen={modalOpen}
                            setModalOpen={handleCloseModal}
                            authRequest={selectedAuthRequest}
                        />
                    )}

                    {/* Add Authorization Request Modal */}
                    <AddAuthRequestModal
                        modalOpen={addModalOpen}
                        setModalOpen={setAddModalOpen}
                        handleAddAuthRequest={handleAddAuthRequest} // Pass the handler for adding a request
                    />
                </div>
            </div>
        </div>
    );
};

export default AuthRequestDashboard;
