import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FreelanceListPage from './pages/FreelanceListPage';
import FreelanceAddPage from './pages/FreelanceAddPage';
import FreelanceEditPage from './pages/FreelanceEditPage';
import FreelanceDetailsPage from './pages/FreelanceDetailsPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/freelances" element={<FreelanceListPage />} />
                <Route path="/freelances/add" element={<FreelanceAddPage />} />
                <Route path="/freelances/edit/:id" element={<FreelanceEditPage />} />
                <Route path="/freelances/details/:id" element={<FreelanceDetailsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
