import React, { useState, useEffect } from 'react';
import { Route, useLocation, Switch } from 'react-router-dom';
import Signup from './components/FormSignup';
import Login from './components/LoginForm';
import ClientProfile from './components/ClientProfileForm';
import FuelQuote from './components/FuelQuoteForm';
import FuelQuoteHistory from './components/FuelQuoteHistory';
import Axios from 'axios';

const App = () => {
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const location = useLocation();

    useEffect(() => {
        onLoad();
    }, [location]);

    async function onLoad() {
        try {
            if(sessionStorage.getItem('username')) {
                userHasAuthenticated(true);
            } else {
                throw new ReferenceError("not logged in");
            }
            console.log("Current Path: '"+location.pathname+"'");
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Signup" exact component={Signup} />
            <Route path="/ClientProfile" exact component={isAuthenticated ? ClientProfile : Login} />
            <Route path="/FuelQuote" exact component={isAuthenticated ? FuelQuote : Login} />
            <Route path="/FuelQuoteHistory" exact component={isAuthenticated ? FuelQuoteHistory : Login} />
        </Switch>
    );
}

export default App;
