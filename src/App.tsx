import React from 'react';
import EmployeeDashboard from "./views/EmployeeDashboard";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import FreelanceDashboard from "./views/FreelanceDashboard";

const App: React.FC = () => {
    return (
        <div>
            <FreelanceDashboard/>
            <ToastContainer/>
        </div>
    );
};

export default App;
