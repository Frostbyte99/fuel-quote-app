import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        props.history.push('/fuelquote');
    };

      return (
        <div className="center-component text-center flex-direction mt-0 p-4 w-25 flex-column container bg-light border rounded">
          <h4> Welcome! </h4>
          <form onSubmit={onSubmit} className="border-0 d-flex align-items flex-column mx-auto w-100">
            <label className="text-left mb-0">Email</label>
            <input className="w-100 mb-0"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
            <label className="text-left mb-0">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              required
            />
            <input className="login-signup-btn" type="submit" value="Log In" />
          </form>
          <small>Don&apos;t have an account? Sign&nbsp;up&nbsp;
            <Link to="/signup">here</Link>
          </small>
        </div>
      );
    };

    export default LoginForm;
