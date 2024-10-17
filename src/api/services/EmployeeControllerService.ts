/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Employee } from '../models/Employee';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EmployeeControllerService {
    /**
     * @returns Employee OK
     * @throws ApiError
     */
    public static getEmployeeById({
        id,
    }: {
        id: number,
    }): CancelablePromise<Employee> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/employees/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns Employee OK
     * @throws ApiError
     */
    public static updateEmployee({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: Employee,
    }): CancelablePromise<Employee> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/employees/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static deleteEmployee({
        id,
    }: {
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/employees/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns Employee OK
     * @throws ApiError
     */
    public static getEmployees(): CancelablePromise<Array<Employee>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/employees',
        });
    }
    /**
     * @returns Employee OK
     * @throws ApiError
     */
    public static createEmployee({
        requestBody,
    }: {
        requestBody: Employee,
    }): CancelablePromise<Employee> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/employees',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
