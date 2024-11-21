import React, {useState} from 'react';
import {Freelance} from '../../api';

type FreelanceFormProps = {
    addFreelance: (freelance: Freelance) => Promise<void>;
};

const FreelanceForm: React.FC<FreelanceFormProps> = ({addFreelance}) => {
    const [freelance, setFreelance] = useState<Freelance>({nom: '', prenom: '', email: ''});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await addFreelance(freelance);
        setFreelance({nom: '', prenom: '', email: ''});
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                placeholder="Nom"
                value={freelance.nom}
                onChange={(e) => setFreelance({...freelance, nom: e.target.value})}
                className="border border-gray-300 p-2 mr-2"
                required
            />
            <input
                type="text"
                placeholder="Prenom"
                value={freelance.prenom}
                onChange={(e) => setFreelance({...freelance, prenom: e.target.value})}
                className="border border-gray-300 p-2 mr-2"
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={freelance.email}
                onChange={(e) => setFreelance({...freelance, email: e.target.value})}
                className="border border-gray-300 p-2 mr-2"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2">Add Freelance</button>
        </form>
    );
};

export default FreelanceForm;
