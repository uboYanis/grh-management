import React from 'react';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import FreelanceDashboard from "./views/FreelanceDashboard";
import {OpenAPI} from "./api";
import env from "react-dotenv";

const App: React.FC = () => {
    OpenAPI.BASE = env.API_BASE_URL;
    return (
        <div>
            <FreelanceDashboard/>
            <ToastContainer/>
        </div>
    );
};

export default App;
