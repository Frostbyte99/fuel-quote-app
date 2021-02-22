import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./FormSignup.css";

const FormSignup = (props) => {
  const divStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };

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
      </form>
      <small>
        Already have an account? Log in
        <Link to="/"> here</Link>
      </small>
    </div>
  );
};

export default FormSignup;
