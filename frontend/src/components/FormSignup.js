import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles.css";
import Axios from 'axios';

const FormSignup = (props) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [passwordError, setPasswordError] = useState();
	const [serverRes, setServerRes] = useState();

/*	
  const handleSubmit = (event) => {
    event.preventDefault();

    const signUpObject = {
      userName,
      password
    };

    if (password !== confirmPassword) {
      setPasswordError("Passwords must match");
    } else {
      setPasswordError("");
      //redirect to login page

      JSON.stringify(signUpObject);

      axios
        .post("http://127.0.0.1:8000/api/user-create/", signUpObject)
        .then((response) => {
          // console.log(response);
          // console.log(response.data);
        });

      props.history.push("/");
    }
  };
*/
	const handleSubmit = (event) => {
		event.preventDefault();

    const signupInfo = {
      userName: userName,
      password: password,
    };

		// reset error before every submit
		setServerRes('');
    setPasswordError('');
    setConfirmPassword('');
		if (password !== confirmPassword) {
			setPasswordError("Passwords must match");
		} else {
			Axios.post('http://127.0.0.1:8000/api/signup/', signupInfo)
        .then((res) => {
					localStorage.setItem('token', res.data.token);
					props.history.push('/');
          console.log(res);
				}).catch((err) => {
					if(err.response) {
            if(err.response.data.error.userName) {
              setServerRes(err.response.data.error.userName+' is already a registered user');
            }
            else {
              setServerRes(JSON.stringify(err.response.data.error));
            }
          }
          else {
            setServerRes('An Error Occured');
          }
			});
		}
	}

  const loginStyle = {
    color: "blue",
  };

  return (
    <div className="center-component text-center flex-direction p-4 w-25 flex-column container bg-light border rounded">
      <form
        className="form border-0 d-flex align-items flex-column mx-auto w-100"
        onSubmit={handleSubmit}
      >
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
            required
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
            required
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
            required
          />
          <p className="text-danger text-left">
            <small>{passwordError}</small>
          </p>
          <p className="text-danger text-left">
            <small>{serverRes}</small>
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
