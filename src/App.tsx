import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FreelanceListPage from './pages/FreelanceListPage';
import FreelanceAddPage from './pages/FreelanceAddPage';
import FreelanceEditPage from './pages/FreelanceEditPage';
import FreelanceDetailsPage from './pages/FreelanceDetailsPage';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/freelance" exact component={FreelanceListPage} />
                <Route path="/freelance/add" component={FreelanceAddPage} />
                <Route path="/freelance/edit/:id" component={FreelanceEditPage} />
                <Route path="/freelance/details/:id" component={FreelanceDetailsPage} />
            </Switch>
        </Router>
    );
};

export default App;
