import React from 'react';
import AuthRequestTableItem from './AuthRequestTableItem';

const AuthRequestTable = ({ authRequests, setSelectedAuthRequest, setModalOpen }) => {
    return (
        <div className="font-primary relative w-full">
            <div className='bg-white dark:bg-gray-800 rounded-t-xl shadow-lg'>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full divide-y divide-gray-300">
                        <thead className="text-xs uppercase text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th className="px-4 py-3 text-center whitespace-nowrap">
                                    <div className="font-semibold text-md">No.</div>
                                </th>
                                <th className="px-4 py-3 text-center whitespace-nowrap">
                                    <div className="font-semibold text-md">Patient Name</div>
                                </th>
                                <th className="px-4 py-3 text-center whitespace-nowrap">
                                    <div className="font-semibold text-md">Treatment Type</div>
                                </th>
                                <th className="px-4 py-3 text-center whitespace-nowrap">
                                    <div className="font-semibold text-md">Insurance Plan</div>
                                </th>
                                <th className="px-4 py-3 text-center whitespace-nowrap">
                                    <div className="font-semibold text-md">Date of Service</div>
                                </th>
                                <th className="px-4 py-3 text-center whitespace-nowrap">
                                    <div className="font-semibold text-md">Status</div>
                                </th>
                                <th className="px-4 py-3 text-center whitespace-nowrap">
                                    <div className="font-semibold text-md">Action</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-50 dark:bg-gray-900">
                            {authRequests.map((request, index) => (
                                <AuthRequestTableItem
                                    key={request._id}
                                    num={index + 1}
                                    authRequest={request}
                                    setSelectedAuthRequest={setSelectedAuthRequest}
                                    setModalOpen={setModalOpen}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AuthRequestTable;
