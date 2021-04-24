import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import "../styles.css";
import axios from 'axios';

const ClientProfileForm = (props) => {
    //These should be set to the Client's Info from DB (if found):
    const [userID, setUserID] = useState(
      "f30e8d27-e64e-437a-a629-c38ec9ebb4f4"
    );
    const [fullName, setFullName] = useState();
    const [address1, setAddress1] = useState();
    const [address2, setAddress2] = useState();
    const [city, setCity]= useState();
    const [usState, setUsState] = useState();
    const [zipcode, setZipCode] = useState();
    const [errorMessage, setErrorMessage] = useState();

    //fetchProfile();
    useEffect(() => {
      const currentUserName = sessionStorage.getItem('username');
      axios.get(`http://127.0.0.1:8000/api/profile-list-user/${currentUserName}/`)
        .then((res) => {
            setFullName(res.data[0].fullName);
            setAddress1(res.data[0].address1);
            setAddress2(res.data[0].address2);
            setCity(res.data[0].city);
            setUsState(res.data[0].usState);
            setZipCode(res.data[0].zipcode);
        }).catch((err) => {
            //setErrorMessage(`Current userName provided (${currentUserName}) has no profile`);
      });
    }, []);


    const onSubmit = (event) => {
        event.preventDefault();
        setUserID("f30e8d27-e64e-437a-a629-c38ec9ebb4f4");

        const clientInformationObject = {
            userName: sessionStorage.getItem('username'),
            fullName: fullName,
            address1: address1,
            address2: address2,
            city: city,
            usState: usState,
            zipcode: zipcode
        };

        // TODO: modify variables so uploads for the current user
        axios.post("http://127.0.0.1:8000/api/profile-create/", clientInformationObject)
        .then(res => {
            // console.log(res);
            //console.log(res.data);
        });
        
        sessionStorage.setItem('clientInformation', JSON.stringify(clientInformationObject));
        // redirect to Fuel Quote Page
        props.history.push('/fuelquote'); //Home
    };

    return (
        <div>
            <NavBar/>
            <div className="text-center flex-direction mt-3 p-3 w-50 flex-column container bg-light border rounded">
                <form onSubmit={onSubmit} className="border-0 d-flex align-items-center flex-column mx-auto w-100">
                    <div className="row align-items-center text-left">
                        <div className="col">
                            <p className="mb-0 text-center"><strong>Personal Information</strong></p>
                            <div className="form-groups">
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
                            <div className="form-group-profile">
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
                            <div className="form-group-profile">
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
                            <div className="form-group-profile">
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
                            <div className="form-group-profile mt-2">
                                <label className="text-left mb-0  ">State</label>
                                <select id="state" name="state" value={usState} className="w-100"
                                    onChange={(e) => setUsState(e.currentTarget.value)} required>
                                    <option value="" selected></option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                            </div>
                            <div className="form-group-profile">
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
                    <input className="login-signup-btn w-50" type="submit" value="Submit" />

										<p className="text-danger text-left">
											<small>
												{ errorMessage }
											</small>
										</p>
                </form>
            </div>
        </div>
    );
};

ClientProfileForm.propTypes = {
    history: PropTypes.string.isRequired,
};

export default ClientProfileForm;
