import {useEffect, useState} from 'react';
import {Freelance, FreelanceControllerService} from '../api';
import {toast} from 'react-toastify';

export type FreelancesHookReturn = {
    freelancesList: Freelance[];
    isLoading: boolean;
    errorMessage: string | null;
    addFreelance: (freelance: Freelance) => Promise<void>;
    modifyFreelance: (id: number, updatedFreelance: Freelance) => Promise<void>;
    removeFreelance: (id: number) => Promise<void>;
    fetchFreelanceById: (id: number) => Promise<Freelance | undefined>;
    getAllFreelances: () => Promise<Freelance[] | undefined>;  // Renamed function
};

/**
 * Custom hook to manage freelance data with enhanced type safety.
 *
 * @returns {FreelancesHookReturn} An object containing:
 * - freelancesList: Array of Freelance objects representing the current freelance list.
 * - isLoading: Boolean indicating whether the data is still loading.
 * - errorMessage: String or null containing any error messages during API calls.
 * - addFreelance: Function to add a new freelance to the list.
 * - modifyFreelance: Function to update an existing freelance's data.
 * - removeFreelance: Function to remove a freelance by their ID.
 * - fetchFreelanceById: Function to fetch a single freelance by ID.
 * - getAllFreelances: Function to fetch all freelances (renamed).
 */
export const useFreelancesHook = (): FreelancesHookReturn => {
    const [freelancesList, setFreelancesList] = useState<Freelance[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        const loadFreelances = async () => {
            try {
                const data = await FreelanceControllerService.getFreelances();
                setFreelancesList(data);
            } catch (error) {
                handleError(error);
            } finally {
                setIsLoading(false);
            }
        };

        loadFreelances();
    }, []);

    const addFreelance = async (freelance: Freelance) => {
        try {
            if (!isValidFreelance(freelance)) {
                setErrorMessage('Invalid freelance data');
                return;
            }
            const newFreelance = await FreelanceControllerService.createFreelance({requestBody: freelance});
            setFreelancesList((prev) => [...prev, newFreelance]);
            toast.success('Freelance added successfully');
        } catch (error) {
            handleError(error);
        }
    };

    const modifyFreelance = async (id: number, updatedFreelance: Freelance) => {
        try {
            if (!isValidFreelance(updatedFreelance)) {
                setErrorMessage('Invalid freelance data');
                return;
            }
            const updated = await FreelanceControllerService.updateFreelance({id, requestBody: updatedFreelance});
            setFreelancesList((prev) => prev.map((freelance) => (freelance.id === id ? updated : freelance)));
            toast.success('Freelance updated successfully');
        } catch (error) {
            handleError(error);
        }
    };

    const removeFreelance = async (id: number) => {
        try {
            await FreelanceControllerService.deleteFreelance({id});
            setFreelancesList((prev) => prev.filter((freelance) => freelance.id !== id));
            toast.success('Freelance deleted successfully');
        } catch (error) {
            handleError(error);
        }
    };

    const fetchFreelanceById = async (id: number): Promise<Freelance | undefined> => {
        try {
            return await FreelanceControllerService.getFreelanceById({id});
        } catch (error) {
            handleError(error);
        }
    };

    const getAllFreelances = async (): Promise<Freelance[] | undefined> => {
        try {
            setFreelancesList(await FreelanceControllerService.getFreelances());
        } catch (error) {
            handleError(error);
            return undefined;  // Return undefined if there's an error
        }
    };

    const isValidFreelance = (freelance: Freelance): boolean => {
        return freelance.nom !== '' && freelance.prenom !== '' && freelance.email !== '';
    };

    const handleError = (error: unknown) => {
        if (error instanceof Error) {
            setErrorMessage(error.message);
        } else if (typeof error === 'string') {
            setErrorMessage(error);
        } else {
            setErrorMessage('An unknown error occurred');
        }
    };

    // Return object with typed data
    return {
        freelancesList,
        isLoading,
        errorMessage,
        addFreelance,
        modifyFreelance,
        removeFreelance,
        fetchFreelanceById,
        getAllFreelances,  // Renamed method
    };
};
