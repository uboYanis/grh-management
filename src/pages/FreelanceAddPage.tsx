import React, {useEffect} from 'react';
import FreelanceForm from '../components/FreelanceForm';
import {useFreelancesHook} from '../hooks/useFreelances';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {Freelance} from '../api';

const FreelanceAddPage: React.FC = () => {
    const {addFreelance, errorMessage} = useFreelancesHook();
    const navigate = useNavigate();

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
        }
    }, [errorMessage]);

    const handleAddFreelance = async (newFreelance: Freelance) => {
        await addFreelance(newFreelance);
        navigate('/freelances');
    };

    return (
        <div>
            <FreelanceForm onSubmit={handleAddFreelance} initialData={{nom: '', prenom: '', email: ''}}
                           isUpdate={false}/>
        </div>
    );
};

export default FreelanceAddPage;
