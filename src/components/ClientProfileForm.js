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
    const [state, setState] = useState();
    const [zipcode, setZipCode] = useState();
    const [errors, setErrors] = useState({fullName: '', address1: '', address2: '', city: '', state: ''});

    const onSubmit = (event) => {
        event.preventDefault();
        let isInputsValid = true;
        let fullNameError = "", address1Error = "", address2Error = "", cityError = "", stateError = "";
        if(fullName.length > 50 ) {
            fullNameError = "Must be less than 50 characters.";
            isInputsValid = false;
        }
        if(address1.length > 100) {
            address1Error = "Must be less than 100 characters.";
            isInputsValid = false;
        }
        // address2 may not exist(optional)
        if(address2 && address2.length > 100) {
            address2Error = "Must be less than 100 characters.";
            isInputsValid = false;
        }
        if(city.length > 100) {
            cityError = "Must be less than 100 characters.";
            isInputsValid = false;
        }
        if(state == undefined) {
            stateError = "Please select a state."
            isInputsValid = false;
        }
        if(!isInputsValid) {
            setErrors({
                fullName: fullNameError,
                address1: address1Error,
                address2: address2Error,
                city: cityError,
                state: stateError
            });
        }
        else {
            const clientInformationObject = {
                fullName,
                address1,
                address2,
                city,
                state,
                zipcode
            };
            localStorage.setItem('clientInformation', JSON.stringify(clientInformationObject));
            // redirect to Fuel Quote Page
            props.history.push('/fuelquote'); //Home
        }
    };

   const onStateSelect = (event, state) => {
        setState(state.abbreviation);
   }

    return (
        <div className="testClass">
            <NavBar/>
            <div className="text-center flex-direction mt-3 p-3 w-50 flex-column container bg-light border rounded">
                <form onSubmit={onSubmit} className="border-0 d-flex align-items-center flex-column mx-auto w-100">
                    <div className="row align-items-center text-left">
                        <div className="col">
                            <p className="mb-0 text-center"><strong>Personal Information</strong></p>
                            <label className="text-left mb-0">Full Name</label>
                            <input className="w-100 mb-0"
                            type="text"
                            name="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.currentTarget.value)}
                            required
                            />
                            <p className="text-danger">
                                <small> { errors.fullName } </small>
                            </p>
                        </div>
                        <div className="col">
                            <p className="mb-0 text-center"><strong>Contact Information</strong></p>
                            <label className="text-left mb-0">Address 1</label>
                            <input className="w-100 mb-0"
                            type="text"
                            name="address1"
                            value={address1}
                            onChange={(e) => setAddress1(e.currentTarget.value)}
                            required
                            />
                            <p className="text-danger">
                                <small> { errors.address1 } </small>
                            </p>
                            <label className="text-left mb-0">Address 2</label>
                            <input className="w-100 mb-0"
                            type="text"
                            name="address2"
                            placeholder="(Optional)"
                            value={address2}
                            onChange={(e) => setAddress2(e.currentTarget.value)}
                            />
                            <p className="text-danger">
                                <small> { errors.address2 } </small>
                            </p>
                            <label className="text-left mb-0">City</label>
                            <input className="w-100 mb-0"
                            type="text"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.currentTarget.value)}
                            required
                            />
                            <p className="text-danger">
                                <small> { errors.city } </small>
                            </p>
                            <label className="text-left mb-0">State</label>
                            <StatesSelect value={state} className="w-100 mb-3" onChange={onStateSelect} required />
                            <p className="text-danger">
                                <small> { errors.state } </small>
                            </p>
                            <label className="text-left mb-0">Zip code</label>
                            <input className="w-100 mb-0"
                            type="text"
                            name="zipcode"
                            value={zipcode}
                            pattern="[0-9]{5}|[0-9]{9}"
                            onChange={(e) => setZipCode(e.currentTarget.value)}
                            required
                            />
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
