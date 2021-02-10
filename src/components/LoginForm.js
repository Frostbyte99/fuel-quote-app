import React, {useState} from 'react'

// Form used to log the user into the site
function LoginForm({Login, error}) {
    
    // Local variable to store user info
    const [details, setDeails] = useState({name: "", email: "", password: ""});
    
    // Will pass the login information to the login event when the "Login" button is pressed 
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {/* Error /*/}
                
                {/*Form to input name*/}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDeails({...details, name: e.target.value})} value={details.name}/>
                </div>
                
                {/*Form to input email*/}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDeails({...details, email: e.target.value})} value={details.email}/>
                </div>
                
                {/*Form to input password*/}
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDeails({...details, password: e.target.value})} value={details.password}/>
                </div>
                
                <input type="submit" value="Login"/>
            </div>
        </form>
        
    )
}

export default LoginForm
