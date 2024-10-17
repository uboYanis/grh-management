import {useEffect, useState} from 'react';
import {Employee, EmployeeControllerService} from "../api";

export const useEmployees = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await EmployeeControllerService.getEmployees();
                setEmployees(data);
            } catch (err: unknown) {
                // Type assertion pour assurer que err est un objet Error ou a une propriété message
                if (err instanceof Error) {
                    setError(err.message);
                } else if (typeof err === 'string') {
                    setError(err); // Si err est une chaîne, l'utiliser directement
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    const createEmployee = async (employee: Employee) => {
        try {
            const newEmployee = await EmployeeControllerService.createEmployee({requestBody: employee});
            setEmployees((prev) => [...prev, newEmployee]);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else if (typeof err === 'string') {
                setError(err);
            } else {
                setError('An unknown error occurred');
            }
        }
    };

    const deleteEmployee = async (id: number) => {
        try {
            await EmployeeControllerService.deleteEmployee({id});
            setEmployees((prev) => prev.filter(emp => emp.id !== id));
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else if (typeof err === 'string') {
                setError(err);
            } else {
                setError('An unknown error occurred');
            }
        }
    };

    return {employees, loading, error, createEmployee, deleteEmployee};
};
