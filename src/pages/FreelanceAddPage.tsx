import React, {useEffect} from 'react';
import FreelanceForm from '../components/FreelanceForm';
import {useFreelancesHook} from '../hooks/useFreelances';
import {useHistory} from 'react-router-dom';
import {toast} from "react-toastify";
import {Freelance} from "../api";

const FreelanceAddPage: React.FC = () => {
    const {addFreelance, errorMessage} = useFreelancesHook();
    const history = useHistory();

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
        }
    }, [errorMessage]);

    const handleAddFreelance = async (newFreelance: Freelance) => {
        await addFreelance(newFreelance);
        history.push('/freelances');
    };

    return (
        <div>
            <FreelanceForm onSubmit={handleAddFreelance} initialData={{nom: '', prenom: '', email: ''}} isUpdate={false}/>
        </div>
    );
};

export default FreelanceAddPage;
