import React, { useState } from 'react';
import { Employee } from '../api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type EmployeeFormProps = {
    addEmployee: (employee: Employee) => Promise<void>;
};

const EmployeeForm: React.FC<EmployeeFormProps> = ({ addEmployee }) => {
    const [employee, setEmployee] = useState<Employee>({ firstName: '', lastName: '', email: '', dateOfBirth: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addEmployee(employee);
            toast.success("Employee added successfully!");
            setEmployee({ firstName: '', lastName: '', email: '', dateOfBirth: '' });
        } catch (error) {
            toast.error("Failed to add employee. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                placeholder="First Name"
                value={employee.firstName}
                onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
                className="border border-gray-300 p-2 mr-2"
                required
            />
            <input
                type="text"
                placeholder="Last Name"
                value={employee.lastName}
                onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
                className="border border-gray-300 p-2 mr-2"
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={employee.email}
                onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                className="border border-gray-300 p-2 mr-2"
                required
            />
            <input
                type="date"
                placeholder="Date of Birth"
                value={employee.dateOfBirth}
                onChange={(e) => setEmployee({ ...employee, dateOfBirth: e.target.value })}
                className="border border-gray-300 p-2 mr-2"
            />
            <button type="submit" className="bg-blue-500 text-white p-2">Add Employee</button>
        </form>
    );
};

export default EmployeeForm;
