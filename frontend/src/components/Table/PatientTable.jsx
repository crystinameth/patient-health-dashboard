import React from 'react';
import PatientTableItem from './PatientTableItem';

const PatientTable = ({ patients, setSelectedPatient, setModalOpen }) => {
    return (
        <div className="font-primary relative w-full">
            <div className='bg-white dark:bg-gray-800 rounded-t-xl shadow-lg'>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full divide-y divide-gray-300">
                        <thead className="text-xs uppercase text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700">
                            <tr>
                                {['No.', 'Name', 'Age', 'Condition', 'Action'].map((header, index) => (
                                    <th key={index} className="px-4 py-3 text-center whitespace-nowrap">
                                        <div className="font-semibold text-md">{header}</div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-gray-50 dark:bg-gray-900">
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
