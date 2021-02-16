import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useForm from "./useForm";

const ClientProfileForm = () => {
    const { handleChange, values, handleSubmit } = useForm();

    return (
        <form>
            <h2>Your Profile</h2>
            <div className="full-name">
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="name" maxLength="50"
                    value={values.fullname} onChange={handleChange} required/>
            </div>
            {/*Store address-1 and address-2 -> 1 string variable for FuelQuoteForm's DeliveryAddress*/}
            <div className="address">
                <div>
                    <label htmlFor="address-1">Address 1:</label>
                    <input type="text" id="address-1" name="address-1" maxLength="100"
                        value={values.addr1} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="address-2">Address 2:</label>
                    <input type="text" id="address-2" name="address-2" maxLength="100"
                        value={values.addr2} onChange={handleChange} />
                </div>
            </div>
            <div className="city">
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" maxLength="100"
                    value={values.city} onChange={handleChange} required/>
            </div>
            <div className="state">
                <label htmlFor="state">State:</label>
                <select id="state" name="state" value={values.state} onChange={handleChange} required>
                    <option value="NA" selected>N/A</option>
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
            <div className="zipcode">
                <label htmlFor="zipcode">Zipcode:</label>
                <input type="text" id="zipcode" name="zipcode" maxLength="9" required
                    pattern="[0-9]{5}|[0-9]{9}" value={values.zipcode} onChange={handleChange} />
            </div>
            <input type="submit" onClick={handleSubmit} value="Enter"/>
        </form>
    )
}

export default ClientProfileForm;
