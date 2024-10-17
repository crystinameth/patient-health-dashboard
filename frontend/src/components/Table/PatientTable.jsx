import React from 'react';
import PatientTableItem from './PatientTableItem';

const PatientTable = ({ patients, setSelectedPatient, setModalOpen }) => {
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
                                    <div className="font-semibold text-center">Name</div>
                                </th>
                                <th className="px-2 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-center">Age</div>
                                </th>
                                <th className="px-2 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-center">Condition</div>
                                </th>
                                <th className="px-2 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-center">Action</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient, index) => (
                                <PatientTableItem
                                    key={patient._id}
                                    num={index + 1}
                                    patient={patient}
                                    setSelectedPatient={setSelectedPatient}
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

export default PatientTable;
