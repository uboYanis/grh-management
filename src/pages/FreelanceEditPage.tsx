import React, { useEffect, useState } from 'react';
import FreelanceForm from '../components/FreelanceForm';
import { useFreelancesHook } from '../hooks/useFreelances';
import { useNavigate, useParams } from 'react-router-dom';
import { Freelance } from "../api";
import { toast } from "react-toastify";

const FreelanceEditPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { fetchFreelanceById, modifyFreelance, errorMessage } = useFreelancesHook();
    const [freelance, setFreelance] = useState<Freelance | null | undefined>(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFreelance = async () => {
            const data = await fetchFreelanceById(Number(id));
            setFreelance(data);
        };

        fetchFreelance();
    }, [id, fetchFreelanceById]);

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
        }
    }, [errorMessage]);

    const handleEditFreelance = async (updatedFreelance: Freelance) => {
        if (freelance?.id) {
            await modifyFreelance(freelance.id, updatedFreelance);
            navigate('/freelances');
        }
    };

    if (!freelance) return <div>Chargement...</div>;

    return (
        <div>
            <FreelanceForm onSubmit={handleEditFreelance} initialData={freelance} isUpdate={true} />
        </div>
    );
};

export default FreelanceEditPage;
