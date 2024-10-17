import React from 'react';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';
import { useEmployees } from '../hooks/useEmployees';

const EmployeeManagement: React.FC = () => {
    const { employees, loading, error, createEmployee, deleteEmployee } = useEmployees();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Employee Management</h1>
            <EmployeeForm onSubmit={createEmployee} />
            <EmployeeList employees={employees} onDelete={deleteEmployee} />
        </div>
    );
};

export default EmployeeManagement;
