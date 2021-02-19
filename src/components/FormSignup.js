import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const FormSignup = (props) => {

  const divStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const [errors, setErrors] = useState({});

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
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
    // TODO: add input validation
    // TODO: save account information

    // Redirect to login page to complete account setup
    props.history.push('/');

  };

  return (
    <div style={divStyle} className="text-center flex-direction mt-0 p-4 w-25 flex-column container bg-light border rounded">
      <h3>Please fill out the information below to make an account</h3>
      <form className="border-0 d-flex align-items flex-column mx-auto w-100" onSubmit={handleSubmit}>
          <label htmlFor="username" className="text-left mb-0">
            Username
          </label>
          <input className="w-100 mb-0"
            id="username"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          <label htmlFor="email" className="text-left mb-0">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          <label htmlFor="password" className="text-left mb-0">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          <label htmlFor="password2" className="text-left mb-0">
            Confirm your password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            placeholder="Re-Enter your password"
            value={values.password2}
            onChange={handleChange}
          />
        <input className="bg-primary border-primary text-white mt-2" type="submit" value="Signup"/>
      </form>
      <small>
      Already have an account? Log in
        <Link to="/"> here</Link>
      </small>
    </div>
  );
};

export default FormSignup;
