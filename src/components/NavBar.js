import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {

    const styleNavBar = {
        background: '#e2e2e2',
    };

    const styleLink = {
        borderRadius: '5px',
        padding: '5px',
        fontWeigh: 'bold',
    };

    return (
        <nav style={styleNavBar} className="navbar navbar-expand-lg navbar-light justify-content-between p-4">
            <div>
                <a href="/clientprofile" style={styleLink} className="navbar-brand bg-light rounded p-1">Home</a>
                <a href="/fuelquote" style={styleLink} className="navbar-brand bg-light rounded p-1">Fuel Form</a>
            </div>
            <div>
                <small style={styleLink} className="navbar-brand border border-white rounded p-1">Welcome!</small>
                <a href="/" style={styleLink} className="navbar-brand bg-light rounded p-1 ml-4 text-dark">Sign Out</a>
            </div>
        </nav>
    );
};

export default NavBar;