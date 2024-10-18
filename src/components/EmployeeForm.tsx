import React, { useState } from 'react';
import { Employee } from "../api";

interface EmployeeFormProps {
    onSubmit: (employee: Employee) => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [dateOfBirth, setDateOfBirth] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Ensure date is in ISO_LOCAL_DATE format (yyyy-MM-dd)
        const formattedDateOfBirth = new Date(dateOfBirth).toISOString().split('T')[0];

        onSubmit({
            firstName,
            lastName,
            email,
            dateOfBirth: formattedDateOfBirth
        });

        setFirstName('');
        setLastName('');
        setEmail('');
        setDateOfBirth('');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="firstName">
                    First Name
                </label>
                <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="lastName">
                    Last Name
                </label>
                <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="dateOfBirth">
                    Date of Birth
                </label>
                <input
                    id="dateOfBirth"
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    placeholder="Date of Birth"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
                Submit
            </button>
        </form>
    );
};

export default EmployeeForm;
