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
                <Route path="/freelances" exact component={FreelanceListPage} />
                <Route path="/freelances/add" component={FreelanceAddPage} />
                <Route path="/freelances/edit/:id" component={FreelanceEditPage} />
                <Route path="/freelances/details/:id" component={FreelanceDetailsPage} />
            </Switch>
        </Router>
    );
};

export default App;
