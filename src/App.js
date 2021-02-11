  
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/FormSignup';
import Login from './components/LoginForm';
import ClientProfile from './components/ClientProfileForm';
import FuelQuote from './components/FuelQuoteForm';

const App = () => (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/ClientProfile" exact component={ClientProfile} />
        <Route path="/FuelQuote" exact component={FuelQuote} />
    </Switch>
);

export default App;

