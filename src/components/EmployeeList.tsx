import React from 'react';
import { Employee } from "../api";

interface EmployeeListProps {
    employees: Employee[];
    onDelete: (id: number) => void;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees, onDelete }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-3/4 bg-white border-collapse border border-gray-300 mx-auto">
                <thead>
                <tr>
                    <th className="px-4 py-2 border-b bg-indigo-500 text-left text-sm font-medium text-white">
                        First Name
                    </th>
                    <th className="px-4 py-2 border-b bg-indigo-500 text-left text-sm font-medium text-white">
                        Last Name
                    </th>
                    <th className="px-4 py-2 border-b bg-indigo-500 text-left text-sm font-medium text-white">
                        Email
                    </th>
                    <th className="px-4 py-2 border-b bg-indigo-500 text-left text-sm font-medium text-white">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id} className="border-t">
                        <td className="px-4 py-2 text-gray-900">{employee.firstName}</td>
                        <td className="px-4 py-2 text-gray-900">{employee.lastName}</td>
                        <td className="px-4 py-2 text-gray-900">{employee.email}</td>
                        <td className="px-4 py-2">
                            <button
                                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                                onClick={() => onDelete(employee.id!)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;