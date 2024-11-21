import React, {useEffect} from 'react';
import {useEmployeesHook} from "../hooks/useEmployees";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeForm from "../components/EmployeeForm";
import {toast} from "react-toastify";


const EmployeeDashboard: React.FC = () => {
    const {employeesList, isLoading, errorMessage, addEmployee, modifyEmployee, removeEmployee} = useEmployeesHook();

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
        }
    }, [errorMessage]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Employee Dashboard</h1>

            <EmployeeForm addEmployee={addEmployee}/>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <EmployeeTable
                    employees={employeesList}
                    modifyEmployee={modifyEmployee}
                    removeEmployee={removeEmployee}
                />
            )}
        </div>
    );
};

export default EmployeeDashboard;
