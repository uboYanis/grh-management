import React, { useState } from 'react';
import { Employee } from '../api';

type EmployeeRowProps = {
    employee: Employee;
    modifyEmployee: (id: number, updatedEmployee: Employee) => Promise<void>;
    removeEmployee: (id: number) => Promise<void>;
};

const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee, modifyEmployee, removeEmployee }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedEmployee, setUpdatedEmployee] = useState<Employee>(employee);

    const handleSave = async () => {
        await modifyEmployee(employee.id!, updatedEmployee);
        setIsEditing(false);
    };

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-left">
                {isEditing ? (
                    <input
                        type="text"
                        value={updatedEmployee.firstName}
                        onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, firstName: e.target.value })}
                        className="border border-gray-300 p-1"
                    />
                ) : (
                    employee.firstName
                )}
            </td>
            <td className="py-3 px-6 text-left">
                {isEditing ? (
                    <input
                        type="text"
                        value={updatedEmployee.lastName}
                        onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, lastName: e.target.value })}
                        className="border border-gray-300 p-1"
                    />
                ) : (
                    employee.lastName
                )}
            </td>
            <td className="py-3 px-6 text-left">
                {isEditing ? (
                    <input
                        type="email"
                        value={updatedEmployee.email}
                        onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, email: e.target.value })}
                        className="border border-gray-300 p-1"
                    />
                ) : (
                    employee.email
                )}
            </td>
            <td className="py-3 px-6 text-left">
                {isEditing ? (
                    <>
                        <button onClick={handleSave} className="text-blue-500">Save</button>
                        <button onClick={() => setIsEditing(false)} className="text-red-500 ml-2">Cancel</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => setIsEditing(true)} className="text-blue-500">Edit</button>
                        <button onClick={() => removeEmployee(employee.id!)} className="text-red-500 ml-2">Remove</button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default EmployeeRow;
