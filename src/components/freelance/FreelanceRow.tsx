import React, {useState} from 'react';
import {Freelance} from '../../api';

type FreelanceRowProps = {
    freelance: Freelance;
    modifyFreelance: (id: number, updatedFreelance: Freelance) => Promise<void>;
    removeFreelance: (id: number) => Promise<void>;
};

const FreelanceRow: React.FC<FreelanceRowProps> = ({freelance, modifyFreelance, removeFreelance}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedFreelance, setUpdatedFreelance] = useState<Freelance>(freelance);

    const handleSave = async () => {
        await modifyFreelance(freelance.id!, updatedFreelance);
        setIsEditing(false);
    };

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-left">
                {isEditing ? (
                    <input
                        type="text"
                        value={updatedFreelance.nom}
                        onChange={(e) => setUpdatedFreelance({...updatedFreelance, nom: e.target.value})}
                        className="border border-gray-300 p-1"
                    />
                ) : (
                    freelance.nom
                )}
            </td>
            <td className="py-3 px-6 text-left">
                {isEditing ? (
                    <input
                        type="text"
                        value={updatedFreelance.prenom}
                        onChange={(e) => setUpdatedFreelance({...updatedFreelance, prenom: e.target.value})}
                        className="border border-gray-300 p-1"
                    />
                ) : (
                    freelance.prenom
                )}
            </td>
            <td className="py-3 px-6 text-left">
                {isEditing ? (
                    <input
                        type="email"
                        value={updatedFreelance.email}
                        onChange={(e) => setUpdatedFreelance({...updatedFreelance, email: e.target.value})}
                        className="border border-gray-300 p-1"
                    />
                ) : (
                    freelance.email
                )}
            </td>
            <td className="py-3 px-6 text-left">
                {isEditing ? (
                    <>
                        <button onClick={handleSave} className="text-blue-500">Save</button>
                        <button onClick={() => setIsEditing(false)} className="text-red-500 ml-2">Cancel</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => setIsEditing(true)} className="text-blue-500">Edit</button>
                        <button onClick={() => removeFreelance(freelance.id!)} className="text-red-500 ml-2">Remove
                        </button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default FreelanceRow;
