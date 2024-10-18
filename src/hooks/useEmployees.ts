import { useEffect, useState } from 'react';
import { Employee, EmployeeControllerService } from "../api";

/**
 * Custom hook to manage employee data.
 *
 * This hook provides methods to fetch, create, and delete employees from an API.
 * It also tracks the loading state and errors during asynchronous operations.
 *
 * @returns {object} An object containing:
 * - employees: Array of Employee objects representing the current employee list.
 * - loading: Boolean indicating whether the data is still loading.
 * - error: String or null containing any error messages during API calls.
 * - createEmployee: Function to add a new employee to the list.
 * - deleteEmployee: Function to remove an employee by their ID.
 */
export const useEmployees = () => {
    // State to store the list of employees
    const [employees, setEmployees] = useState<Employee[]>([]);

    // State to manage the loading status during data fetching
    const [loading, setLoading] = useState<boolean>(true);

    // State to store error messages, if any, during API operations
    const [error, setError] = useState<string | null>(null);

    /**
     * Function to fetch employees from the API and update the local state.
     */
    const fetchEmployees = async () => {
        try {
            // API call to fetch all employees
            const data = await EmployeeControllerService.getEmployees();
            setEmployees(data); // Update state with the fetched employees
        } catch (err: unknown) {
            // Handle different types of errors
            if (err instanceof Error) {
                setError(err.message); // If error has a message property, use it
            } else if (typeof err === 'string') {
                setError(err); // If error is a string, use it directly
            } else {
                setError('An unknown error occurred'); // Fallback for unrecognized errors
            }
        } finally {
            setLoading(false); // Set loading to false after fetching is complete
        }
    };

    /**
     * useEffect hook to fetch the list of employees when the component mounts.
     * This effect only runs once because the dependency array is empty ([]).
     */
    useEffect(() => {
        // Declare a synchronous function to call fetchEmployees
        const loadEmployees = () => {
            fetchEmployees(); // Call the asynchronous function
        };

        loadEmployees(); // Invoke the synchronous wrapper

        // Optionally return a cleanup function if necessary
        return () => {
            // Cleanup logic if needed
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    /**
     * Function to create a new employee via API and update the local state.
     *
     * @param {Employee} employee - The employee object to create.
     */
    const createEmployee = async (employee: Employee) => {
        try {
            // API call to create a new employee
            const newEmployee = await EmployeeControllerService.createEmployee({ requestBody: employee });
            setEmployees((prev) => [...prev, newEmployee]); // Add the new employee to the existing list
        } catch (err: unknown) {
            // Handle errors as in the fetchEmployees method
            if (err instanceof Error) {
                setError(err.message);
            } else if (typeof err === 'string') {
                setError(err);
            } else {
                setError('An unknown error occurred');
            }
        }
    };

    /**
     * Function to delete an employee by their ID via API and update the local state.
     *
     * @param {number} id - The ID of the employee to delete.
     */
    const deleteEmployee = async (id: number) => {
        try {
            // API call to delete an employee by ID
            await EmployeeControllerService.deleteEmployee({ id });
            // Remove the deleted employee from the local state
            setEmployees((prev) => prev.filter(emp => emp.id !== id));
        } catch (err: unknown) {
            // Handle errors as in the fetchEmployees method
            if (err instanceof Error) {
                setError(err.message);
            } else if (typeof err === 'string') {
                setError(err);
            } else {
                setError('An unknown error occurred');
            }
        }
    };

    // Return the state and functions to be used by the component
    return { employees, loading, error, createEmployee, deleteEmployee };
};
