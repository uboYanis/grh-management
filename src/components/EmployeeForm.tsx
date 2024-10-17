import React, {useState} from 'react';
import {Employee} from "../api";

interface EmployeeFormProps {
    onSubmit: (employee: Employee) => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({onSubmit}) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [dateOfBirth, setDateOfBirth] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({firstName, lastName, email, dateOfBirth});
        setFirstName('');
        setLastName('');
        setEmail('');
        setDateOfBirth('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required/>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
            <input value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} placeholder="Date of Birth"
                   required/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default EmployeeForm;
