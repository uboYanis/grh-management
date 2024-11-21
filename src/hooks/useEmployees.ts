import {useEffect, useState} from 'react';
import {Employee, EmployeeControllerService} from "../api";

export type EmployeesHookReturn = {
    employeesList: Employee[];
    isLoading: boolean;
    errorMessage: string | null;
    addEmployee: (employee: Employee) => Promise<void>;
    modifyEmployee: (id: number, updatedEmployee: Employee) => Promise<void>;
    removeEmployee: (id: number) => Promise<void>;
    fetchEmployeeById: (id: number) => Promise<Employee | undefined>;
};

/**
 * Custom hook to manage employee data with enhanced type safety.
 *
 * @returns {EmployeesHookReturn} An object containing:
 * - employeesList: Array of Employee objects representing the current employee list.
 * - isLoading: Boolean indicating whether the data is still loading.
 * - errorMessage: String or null containing any error messages during API calls.
 * - addEmployee: Function to add a new employee to the list.
 * - modifyEmployee: Function to update an existing employee's data.
 * - removeEmployee: Function to remove an employee by their ID.
 * - fetchEmployeeById: Function to fetch a single employee by ID.
 */
export const useEmployeesHook = (): EmployeesHookReturn => {
    const [employeesList, setEmployeesList] = useState<Employee[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        const loadEmployees = async () => {
            try {
                const data = await EmployeeControllerService.getEmployees();
                setEmployeesList(data);
            } catch (error) {
                handleError(error);
            } finally {
                setIsLoading(false);
            }
        };

        loadEmployees();
    }, []);

    const addEmployee = async (employee: Employee) => {
        try {
            if (!isValidEmployee(employee)) {
                setErrorMessage('Invalid employee data');
                return;
            }
            const newEmployee = await EmployeeControllerService.createEmployee({requestBody: employee});
            setEmployeesList((prev) => [...prev, newEmployee]);
        } catch (error) {
            handleError(error);
        }
    };

    const modifyEmployee = async (id: number, updatedEmployee: Employee) => {
        try {
            if (!isValidEmployee(updatedEmployee)) {
                setErrorMessage('Invalid employee data');
                return;
            }
            const updated = await EmployeeControllerService.updateEmployee({id, requestBody: updatedEmployee});
            setEmployeesList((prev) => prev.map(emp => (emp.id === id ? updated : emp)));
        } catch (error) {
            handleError(error);
        }
    };

    const removeEmployee = async (id: number) => {
        try {
            await EmployeeControllerService.deleteEmployee({id});
            setEmployeesList((prev) => prev.filter(emp => emp.id !== id));
        } catch (error) {
            handleError(error);
        }
    };

    const fetchEmployeeById = async (id: number): Promise<Employee | undefined> => {
        try {
            return await EmployeeControllerService.getEmployeeById({id});
        } catch (error) {
            handleError(error);
        }
    };

    const isValidEmployee = (employee: Employee): boolean => {
        // Basic validation logic here
        return employee.firstName !== '' && employee.lastName !== '' && employee.email !== '' && employee.dateOfBirth !== '';
    };

    const handleError = (error: unknown) => {
        if (error instanceof Error) {
            setErrorMessage(error.message);
        } else if (typeof error === 'string') {
            setErrorMessage(error);
        } else {
            setErrorMessage('An unknown error occurred');
        }

        // Optional: Log error for debugging purposes
        console.error(error);
    };

    // Return object with typed data
    return {
        employeesList,
        isLoading,
        errorMessage,
        addEmployee,
        modifyEmployee,
        removeEmployee,
        fetchEmployeeById,
    };
};
