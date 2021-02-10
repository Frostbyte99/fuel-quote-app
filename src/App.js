import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  
  // Temporary variable for login
  const admin = {
    email: "admin@admin.com",
    password: "admin123"
  }

  // States for login
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log("Logout");
  }

  return (
    <div className="App">
      {(user.email != "") ? ( 
      <div className="welcome">
        <h2>Welcome, <span>{user.name}</span></h2>
        <button>Logout</button>
      </div>
      ) : (
        <LoginForm/>
      )}
    </div>
  );
}

export default App;
