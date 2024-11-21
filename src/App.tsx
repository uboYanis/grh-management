import React from 'react';
import EmployeeDashboard from "./views/EmployeeDashboard";
import {ToastContainer} from "react-toastify";

const App: React.FC = () => {
    return (
        <div>
            <EmployeeDashboard/>
            <ToastContainer/>
        </div>
    );
};

export default App;
