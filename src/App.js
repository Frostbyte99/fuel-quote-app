  
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

/* import React, { useState } from "react";
import Form from "./components/Form";
import LoginForm from "./components/LoginForm";

function App() {
  // Temporary variable for login
  const admin = {
    email: "admin@admin.com",
    password: "admin123",
  };

  // States for login
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  // The login event
  const Login = (details) => {
    console.log(details);

    if (details.email === admin.email && details.password === admin.password) {
      console.log("Logged in as admin!");
    } else {
      console.log("Details do not match!");
    }
  };

  // The Logout event
  const Logout = () => {
    console.log("Logout");
  };

  return (
    <div className="App">
      <Form />
    </div>

    //   <div className="App">
    //     {user.email !== "" ? (
    //       <div className="welcome">
    //         <h2>
    //           Welcome, <span>{user.name}</span>
    //         </h2>
    //         <button>Logout</button>
    //       </div>
    //     ) : (
    //       <LoginForm Login={Login} error={error} />
    //     )}
    //   </div>
  );
}

export default App;
*/

