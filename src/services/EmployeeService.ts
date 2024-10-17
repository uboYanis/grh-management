import {ApiError, Employee, EmployeeControllerService} from "../api";

/**
 * EmployeeService: Handles all Employee-related business logic and API interaction.
 */
export class EmployeeService {
    /**
     * Fetch an employee by their ID.
     * @param employeeId - The unique ID of the employee to be retrieved.
     * @returns A promise that resolves to the Employee object.
     * @throws ApiError if the API call fails.
     */
    public async fetchEmployeeById(employeeId: number): Promise<Employee> {
        try {
            const employee = await EmployeeControllerService.getEmployeeById({id: employeeId});
            console.log('Employee retrieved successfully:', employee);
            return employee;
        } catch (error) {
            this.handleError(error);
            throw error; // rethrow error to allow further handling upstream
        }
    }

    /**
     * Create a new employee.
     * @param employeeData - The employee object containing details of the employee to be created.
     * @returns A promise that resolves to the created Employee object.
     * @throws ApiError if the API call fails.
     */
    public async createEmployee(employeeData: Employee): Promise<Employee> {
        try {
            const createdEmployee = await EmployeeControllerService.createEmployee({requestBody: employeeData});
            console.log('Employee created successfully:', createdEmployee);
            return createdEmployee;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    /**
     * Update an existing employee.
     * @param employeeId - The unique ID of the employee to be updated.
     * @param employeeData - The updated employee object.
     * @returns A promise that resolves to the updated Employee object.
     * @throws ApiError if the API call fails.
     */
    public async updateEmployee(employeeId: number, employeeData: Employee): Promise<Employee> {
        try {
            const updatedEmployee = await EmployeeControllerService.updateEmployee({
                id: employeeId,
                requestBody: employeeData
            });
            console.log('Employee updated successfully:', updatedEmployee);
            return updatedEmployee;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    /**
     * Delete an employee by their ID.
     * @param employeeId - The unique ID of the employee to be deleted.
     * @returns A promise that resolves once the employee is deleted.
     * @throws ApiError if the API call fails.
     */
    public async deleteEmployee(employeeId: number): Promise<void> {
        try {
            await EmployeeControllerService.deleteEmployee({id: employeeId});
            console.log(`Employee with ID ${employeeId} deleted successfully.`);
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    /**
     * Handle API errors.
     * @param error - The error caught during an API call.
     */
    private handleError(error: unknown): void {
        if (error instanceof ApiError) {
            console.error('API Error:', error.message, error.status, error.body);
        } else {
            console.error('Unexpected Error:', error);
        }
    }
}
