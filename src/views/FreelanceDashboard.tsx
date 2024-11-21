import React, {useEffect} from 'react';
import {useFreelancesHook} from "../hooks/useFreelances";
import FreelanceTable from "../components/freelance/FreelanceTable";
import FreelanceForm from "../components/freelance/FreelanceForm";
import {toast} from "react-toastify";

const FreelanceDashboard: React.FC = () => {
    const {
        freelancesList,
        isLoading,
        errorMessage,
        addFreelance,
        modifyFreelance,
        removeFreelance
    } = useFreelancesHook();

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
        }
    }, [errorMessage]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Freelance Dashboard</h1>

            <FreelanceForm addFreelance={addFreelance}/>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <FreelanceTable
                    freelances={freelancesList}
                    modifyFreelance={modifyFreelance}
                    removeFreelance={removeFreelance}
                />
            )}
        </div>
    );
};

export default FreelanceDashboard;
