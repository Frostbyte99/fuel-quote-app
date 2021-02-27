import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';
import FuelQuoteHistory from "./FuelQuoteHistory";
import "../styles.css";

const FuelQuoteForm = () => {
    const [deliveryDate, setDeliveryDate] = useState();
    const [gallons, setGallons] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const clientInfo = JSON.parse(localStorage.getItem('clientInformation'));
    const address = clientInfo!=null ? (clientInfo.address1 + " " + clientInfo.address2).trim() : "";
    const pricePerGallon = 2.199; //would be calculated according to state/city/address

    const onSubmit = (event) => {
        event.preventDefault();
        const fuelQuote = {
            clientInfo,
            deliveryDate,
            gallons,
            //pricePerGallon,
            totalPrice
        };
        localStorage.setItem('fuelQuoteInformation', JSON.stringify(fuelQuote));
        clearFuelQuote();
        //console.log(JSON.stringify(fuelQuote));
        //? redirect to Fuel Quote History Page
        //props.history.push('/fuelquote/history');
        //FuelQuoteHistory.appendRow(); //Not sure why this won't work
    }

    const clearFuelQuote = () => {
        setDeliveryDate("");
        setGallons("");
        setTotalPrice(0);
    }

    const handleGallonChange = (g) => {
        if (g != "" && parseFloat(g)!=parseFloat(g).toFixed(3)) {
            return;
        }
        if(Number.isInteger(g*1000))
        {
            //Trim leading & trailing 0's. Format: g = [i or i.###] (where i = floor[g], # = [0-9 or ""])
            setGallons(g.replace(/^0*([0-9]+)(.[0-9]{1,3})?0*/, "$1$2"));
            setTotalPrice(parseFloat(g * pricePerGallon).toFixed(2)); //totalPrice = i.## (# = [0-9])
        }
    }

    return (
        <div>
            <NavBar />
            <div className="center-component text-center flex-direction mt-3 p-3 w-50 flex-column container bg-light border rounded">
                <form className="border-0 d-flex align-items-center flex-column mx-auto w-100"
                    onSubmit={onSubmit}>
                    <h2>Enter Your Fuel Quote</h2>
                    <div className="form-group">
                        <label className="form-label">Delivery Address:</label>
                        <input type="text" name="toAddr" id="toAddr" className="form-input readonly"
                            value={address} placeholder="Enter Address in Profile" readonly required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="delivery-date" className="form-label">Delivery Date:</label>
                        <input type="date" name="delivery-date" id="delivery-date" className="form-input"
                            value={deliveryDate}
                            onChange={(e) => setDeliveryDate(e.currentTarget.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gallons" className="form-label">Gallons:</label>
                        <input type="number" name="gallons" id="gallons" className="form-input"
                            value={gallons} min="0" max="1000000"
                            onChange={(e) => handleGallonChange(e.currentTarget.value)} step="any" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price-per-gallon" className="form-label">Price/Gallon:</label>
                        <input type="text" name="price-per-gallon" id="price-per-gallon" className="form-input readonly"
                            value={`$${Math.floor(pricePerGallon*100)/100} ${(pricePerGallon*1000)%10}/10`}
                            readonly required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="total-price" className="form-label">Total Price:</label>
                        <input type="text" name="total-price" id="total-price" className="form-input readonly"
                            value={`$${totalPrice || "0.00"}`} readonly required />
                    </div>
                    {/*gallons, price-per-gallon should have 3 decimal places: #.###*/}
                    <input type="submit" value="Enter" className="bg-primary w-50 border-primary text-white mt-4"/>
                </form>
            </div>
            <div className="bottom">
                <Link to="/fuelquotehistory"><button>See Fuel Quote History</button></Link>
            </div>
        </div>
    )
}

export default FuelQuoteForm;
