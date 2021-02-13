import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        props.history.push('/fuelquote');
    };

    const divStyle = {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      };

      return (
        <div style={divStyle} className="text-center flex-direction mt-0 p-4 w-25 flex-column container bg-light border rounded">
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
            <input className="bg-primary border-primary text-white mt-2" type="submit" value="Log In" />
          </form>
          <small>Don&apos;t have an account? Sign up
            <Link to="/signup"> here</Link>
          </small>
        </div>
      );
    };

    Login.propTypes = {
        history: PropTypes.string.isRequired,
    };

    export default Login;
