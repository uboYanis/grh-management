import React from 'react';
import { Employee } from '../api';
import EmployeeRow from './EmployeeRow';

type EmployeeTableProps = {
    employees: Employee[];
    modifyEmployee: (id: number, updatedEmployee: Employee) => Promise<void>;
    removeEmployee: (id: number) => Promise<void>;
};

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees, modifyEmployee, removeEmployee }) => {
    return (
        <table className="min-w-full bg-white border border-gray-200">
            <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">First Name</th>
                <th className="py-3 px-6 text-left">Last Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Actions</th>
            </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
            {employees.map((employee) => (
                <EmployeeRow
                    key={employee.id}
                    employee={employee}
                    modifyEmployee={modifyEmployee}
                    removeEmployee={removeEmployee}
                />
            ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;
