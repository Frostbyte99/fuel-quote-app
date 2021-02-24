import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import StatesSelect from "react-form-states-select";
import NavBar from "./NavBar";
import "../styles.css";

const ClientProfileForm = (props) => {
    const [fullName, setFullName] = useState();
    const [address1, setAddress1] = useState();
    const [address2, setAddress2] = useState();
    const [city, setCity]= useState();
    const [usState, setUsState] = useState();
    const [zipcode, setZipCode] = useState();
    
    const onSubmit = (event) => {
        event.preventDefault();
        const clientInformationObject = {
            fullName,
            address1,
            address2,
            city,
            usState,
            zipcode
        };
        localStorage.setItem('clientInformation', JSON.stringify(clientInformationObject));
        // redirect to Fuel Quote Page
        props.history.push('/fuelquote'); //Home
    };

   const onStateSelect = (event, state) => {
        event.preventDefault();
        setUsState(state.name);
   }

    return (
        <div>
            <NavBar/>
            <div className="text-center flex-direction mt-3 p-3 w-50 flex-column container bg-light border rounded">
                <form onSubmit={onSubmit} className="border-0 d-flex align-items-center flex-column mx-auto w-100">
                    <div className="row align-items-center text-left">
                        <div className="col">
                            <p className="mb-0 text-center"><strong>Personal Information</strong></p>
                            <div className="form-group">
                                <label className="text-left mb-0">Full Name</label>
                                <input className="w-100 mb-0"
                                maxLength="50"
                                type="text"
                                name="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.currentTarget.value)}
                                required
                                />
                            </div>
                        </div>
                        <div className="col">
                            <p className="mb-0 text-center"><strong>Contact Information</strong></p>
                            <div className="form-group">
                                <label className="text-left mb-0">Address 1</label>
                                <input className="w-100 mb-0"
                                maxLength="100"
                                type="text"
                                name="address1"
                                value={address1}
                                onChange={(e) => setAddress1(e.currentTarget.value)}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label className="text-left mb-0">Address 2</label>
                                <input className="w-100 mb-0"
                                maxLength="100"
                                type="text"
                                name="address2"
                                placeholder="(Optional)"
                                value={address2}
                                onChange={(e) => setAddress2(e.currentTarget.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="text-left mb-0">City</label>
                                <input className="w-100 mb-0"
                                maxLength="100"
                                type="text"
                                name="city"
                                value={city}
                                onChange={(e) => setCity(e.currentTarget.value)}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label className="text-left mb-0">State</label>
                                <StatesSelect className="w-100 mb-3"
                                    value={usState}
                                    onChange={onStateSelect}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="text-left mb-0">Zip code</label>
                                <input className="w-100 mb-0"
                                maxLength="9"
                                type="text"
                                name="zipcode"
                                value={zipcode}
                                pattern="[0-9]{5}|[0-9]{9}"
                                onChange={(e) => setZipCode(e.currentTarget.value)}
                                required
                                />
                            </div>
                        </div>
                    </div>
                    <input className="bg-primary w-50 border-primary text-white mt-4" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

ClientProfileForm.propTypes = {
    history: PropTypes.string.isRequired,
};

export default ClientProfileForm;
