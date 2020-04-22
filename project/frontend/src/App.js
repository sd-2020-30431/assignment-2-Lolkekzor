import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import routes from './routes';
import BaseLayout from './layouts/BaseLayout';

import GlobalRedirect from './GlobalRedirect';

class App extends React.Component {
    render() {
        return (
            <Router>
                <GlobalRedirect /> 
                <Switch>
                    {routes.map((route, idx) => {
                        return (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                component={() => (
                                    <route.layout>
                                        <route.component/>
                                    </route.layout>
                                )}
                            />
                        );
                    })}
                </Switch>
            </Router>
        );
    }
}

export default App;
