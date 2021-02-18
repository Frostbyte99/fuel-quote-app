import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import StatesSelect from "react-form-states-select";
import NavBar from "./NavBar";


const ClientProfileForm = (props) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [address1, setAddress1] = useState();
    const [address2, setAddress2] = useState();
    const [city, setCity]= useState();
    const [state, setState] = useState();
    const [zipCode, setZipCode] = useState();
    const [errors, setErrors] = useState({firstName: '', lastName: '', address1: '', address2: '', city: ''});

    const onSubmit = (event) => {
        event.preventDefault();
        let isInputsValid = true;
        let firstNameError = "", lastNameError = "", address1Error = "", address2Error = "", cityError = "";
        if(firstName.length > 25 ) {
            firstNameError = "Must be less than 25 of characters.";
            isInputsValid = false;
        }
        if(lastName.length > 25 ) {
            lastNameError = "Must be less than 25 of characters.";
            isInputsValid = false;
        }
        if(address1.length > 100) {
            address1Error = "Must be less than 100 of characters.";
            isInputsValid = false;
        }
        // address2 may not exist(optional)
        if(address2 && address2.length > 100) {
            address2Error = "Must be less than 100 of characters.";
            isInputsValid = false;
        }
        if(city.length > 100) {
            cityError = "Must be less than 100 of characters.";
            isInputsValid = false;
        }
        if(!isInputsValid) {
            setErrors({
                firstName: firstNameError,
                lastName: lastNameError,
                address1: address1Error,
                address2: address2Error,
                city: cityError,
            });
        }
        else {
            const clientInformationObject = {
                firstName,
                lastName,
                address1,
                address2,
                city,
                state,
                zipCode
            };
            console.log("client" + JSON.stringify(clientInformationObject));
            localStorage.setItem('clientInformation', JSON.stringify(clientInformation));
            // redirect to Fuel Quote Page
            props.history.push('/fuelquote');
        }
        
    };

   const onStateSelect = (event, state) => {
        setState(state.abbreviation);
   }

    return (
        <div>
            <NavBar/>
            <div className="text-center flex-direction mt-3 p-3 w-50 flex-column container bg-light border rounded">
                <form onSubmit={onSubmit} className="border-0 d-flex align-items-center flex-column mx-auto w-100">
                    <div className="row align-items-center text-left">
                        <div className="col">
                            <p className="mb-0 text-center"><strong> Personal Information </strong></p>
                            <label className="text-left mb-0">First Name</label>
                            <input className="w-100 mb-0"
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.currentTarget.value)}
                            required
                            />
                            <p className="text-danger">
                                <small> { errors.firstName } </small>
                            </p>
                            <label className="text-left mb-0">Last Name</label>
                            <input className="w-100 mb-0"
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.currentTarget.value)}
                            required
                            />
                            <p className="text-danger">
                                <small> { errors.lastName } </small>
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
                            <StatesSelect value={state} className="w-100 mb-3" onChange={onStateSelect} />
                            <label className="text-left mb-0">Zip code</label>
                            <input className="w-100 mb-0"
                            type="text"
                            name="zipcode"
                            value={zipCode}
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