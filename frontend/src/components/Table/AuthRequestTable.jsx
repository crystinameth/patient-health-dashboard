import React from 'react';
import AuthRequestTableItem from './AuthRequestTableItem';

const AuthRequestTable = ({ authRequests, setSelectedAuthRequest, setModalOpen }) => {
    return (
        <div className="font-primary relative w-full">
            <div className='bg-white dark:bg-dark_50 rounded-t-xl'>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full divide-y divide-gray-200">
                        <thead className="text-xs uppercase text-[#8C8C8C]">
                            <tr>
                                <th className="px-2 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-center">No.</div>
                                </th>
                                <th className="px-2 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-center">Patient Name</div>
                                </th>
                                <th className="px-2 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-center">Treatment Type</div>
                                </th>
                                <th className="px-2 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-center">Insurance Plan</div>
                                </th>
                                <th className="px-2 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-center">Date of Service</div>
                                </th>
                                <th className="px-2 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-center">Status</div>
                                </th>
                                <th className="px-2 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-center">Action</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
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
