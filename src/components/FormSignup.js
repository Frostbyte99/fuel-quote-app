import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "../styles.css";


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

  return (
    <div className="center-component text-center flex-direction p-4 w-25 flex-column container bg-light border rounded">
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
        <button className="login-signup-btn" type="submit">
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

  /*
  // This code looks like a login, not a signup.
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log("Form submitted!");
    console.log(values);
    e.preventDefault();

    // TODO: save account information

    // Redirect to login page to complete account setup
    props.history.push("/");
  };
  
  return (
    <div
      style={divStyle}
      className="text-center flex-direction mt-0 p-4 w-25 flex-column container bg-light border rounded"
    >
      <h3>Please fill out the information below to make an account</h3>
      <form
        className="border-0 d-flex align-items flex-column mx-auto w-100"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username" className="text-left mb-0">
          Username
        </label>
        <input
          className="w-100 mb-0"
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
          required
          pattern="[A-Za-z0-9]+"
          title="Only letters and numbers"
        />
        <label htmlFor="password" className="text-left mb-0">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
          pattern="[A-Za-z0-9]+"
          title="Only letters and numbers"
        />
        <input
          className="bg-primary border-primary text-white mt-2"
          type="submit"
          value="Signup"
        />
        */
      