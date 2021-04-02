import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = (props) => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState('');
	const [serverRes, setServerRes] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
		// reset error before every submit
    setServerRes('');

    const loginInfo = {
      userName: user,
      password: password
    };
		
    Axios.post('http://127.0.0.1:8000/api/login/', JSON.stringify(loginInfo))
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/fuelquote');
		  }).catch((err) => {
				if(err.response) {
          setServerRes(JSON.stringify(err.response.data));
        }
        else {
          setServerRes('Incorrect email or password.');
        }
		});
  }

  return (
    <div className="center-component text-center flex-direction mt-0 p-4 w-25 flex-column container bg-light border rounded">
      <h4> Welcome! </h4>
      <form onSubmit={onSubmit} className="border-0 d-flex align-items flex-column mx-auto w-100">
        <label className="text-left mb-0">Username</label>
        <input className="w-100 mb-0"
          type="text"
          name="user"
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.currentTarget.value)}
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
      <p className="text-danger text-left">
        <small>
          { serverRes }
        </small>
      </p>
      <small>Don&apos;t have an account? Sign&nbsp;up&nbsp;
        <Link to="/signup">here</Link>
      </small>
    </div>
  );
};

export default LoginForm;
