import React from 'react';
import {Employee} from "../api";

interface EmployeeListProps {
    employees: Employee[];
    onDelete: (id: number) => void;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees, onDelete }) => {
    return (
        <ul>
            {employees.map((employee) => (
                <li key={employee.id}>
                    {employee.firstName} {employee.lastName} - {employee.email}
                    <button onClick={() => onDelete(employee.id!)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default EmployeeList;
