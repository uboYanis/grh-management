import React, { useEffect } from 'react';
import FreelanceTable from '../components/FreelanceTable';
import { useFreelancesHook } from '../hooks/useFreelances';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const FreelanceListPage: React.FC = () => {
    const { freelancesList, isLoading, errorMessage, removeFreelance, getAllFreelances } = useFreelancesHook();

    const handleDelete = (id: number) => {
        removeFreelance(id);
    };

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
        }
        getAllFreelances();
    }, [errorMessage, getAllFreelances]);

    if (isLoading) return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="text-xl text-gray-500">Chargement...</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header section */}
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-semibold text-gray-800">Liste des Freelances</h1>
                    <Link to="/freelance/add">
                        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-200">
                            Ajouter un freelance
                        </button>
                    </Link>
                </div>

                {/* Freelance table */}
                <div className="overflow-hidden bg-white shadow-xl rounded-lg">
                    <FreelanceTable freelances={freelancesList} onDelete={handleDelete} />
                </div>
            </div>
        </div>
    );
};

export default FreelanceListPage;
