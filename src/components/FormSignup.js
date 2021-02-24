import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const FormSignup = (props) => {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [passwordError, setPasswordError] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            setPasswordError("Passwords must match");
        }
        else {
            //redirect to login page
            props.history.push('/');
        }
    }
    

 const loginStyle = {
    color: "blue",
  };

// I will continue this.
  return (
    <div className="text-center flex-direction p-4 w-25 flex-column container bg-light border rounded">
      <form className="form border-0 d-flex align-items flex-column mx-auto w-100" onSubmit={handleSubmit}>
        <h1>Signup form</h1>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="form-input"
            name="username"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUserName(e.currentTarget.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-input"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-input"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm your password
          </label>
          <input
            id="password2"
            type="password"
            className="form-input"
            name="password2"
            placeholder="Re-Enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
          />
          <p className="text-danger text-left">
            <small>
                { passwordError }
            </small>
        </p>
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login{" "}
          <Link style={loginStyle} to="/">
            here
          </Link>
        </span>
      </form>
    </div>
  );
};

FormSignup.propTypes = {
    history: PropTypes.string.isRequired,
};

export default FormSignup;
