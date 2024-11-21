import React from 'react';
import {Freelance} from '../../api';
import FreelanceRow from './FreelanceRow';

type FreelanceTableProps = {
    freelances: Freelance[];
    modifyFreelance: (id: number, updatedFreelance: Freelance) => Promise<void>;
    removeFreelance: (id: number) => Promise<void>;
};

const FreelanceTable: React.FC<FreelanceTableProps> = ({freelances, modifyFreelance, removeFreelance}) => {
    return (
        <table className="min-w-full bg-white border border-gray-200">
            <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Nom</th>
                <th className="py-3 px-6 text-left">Prenom</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Actions</th>
            </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
            {freelances.map((freelance) => (
                <FreelanceRow
                    key={freelance.id}
                    freelance={freelance}
                    modifyFreelance={modifyFreelance}
                    removeFreelance={removeFreelance}
                />
            ))}
            </tbody>
        </table>
    );
};

export default FreelanceTable;
