import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import "../styles.css";

const FuelQuoteForm = (props) => {
    const [deliveryDate, setDeliveryDate] = useState();
    const [gallons, setGallons] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const clientInfo = JSON.parse(localStorage.getItem('clientInformation'));
    const address = (clientInfo.address1 + " " + clientInfo.address2).trim();
    const pricePerGallon = 2.199; //would be calculated according to state/city/address

    const onSubmit = (event) => {
        event.preventDefault();
        const fuelQuote = {
            clientInfo,
            gallons,
            deliveryDate,
            pricePerGallon,
            totalPrice
        };
        console.log(JSON.stringify(fuelQuote));
        localStorage.setItem('fuelQuoteInformation', JSON.stringify(fuelQuote));
        // redirect to Fuel Quote History Page
        props.history.push('/fuelquote/history');
    }

    const handleGallonChange = (g) => {
        if (g != "" && parseFloat(g)!=parseFloat(g).toFixed(3)) {
            return;
        }
        if(Number.isInteger(g*1000))
        {
            setGallons(g.replace(/^0*([0-9]+)(.[0-9]{0,3})?0*/, "$1$2")); //trims leading & trailing 0's
            setTotalPrice(parseFloat(g * pricePerGallon).toFixed(2));
        }
    }

    return (
        <div>
            <NavBar />
            <form onSubmit={onSubmit}>
                <h2>Enter Your Fuel Quote</h2>
                <div className="form-group-readonly">
                    <label htmlFor="toAddr">Delivery Address:</label>
                    <input type="text" name="toAddr" id="toAddr" value={address} readonly required />
                </div>
                <div className="form-group">
                    <label htmlFor="delivery-date">Delivery Date:</label>
                    <input type="date" name="delivery-date" id="delivery-date"
                        value={deliveryDate} onChange={(e) => setDeliveryDate(e.currentTarget.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="gallons">Gallons:</label>
                    <input type="number" name="gallons" id="gallons" value={gallons} min="0" max="1000000"
                        onChange={(e) => handleGallonChange(e.currentTarget.value)} required />
                </div>
                <div className="form-group-readonly">
                    <label htmlFor="price-per-gallon">Price/Gallon:</label>
                    <input type="text" name="price-per-gallon" id="price-per-gallon" //value="$2.19 9/10"
                        value={`$${Math.floor(pricePerGallon*100)/100} ${(pricePerGallon*1000)%10}/10`}
                        readonly required />
                </div>
                <div className="form-group-readonly">
                    <label htmlFor="total-price">Total Price:</label>
                    <input type="text" name="total-price" id="total-price"
                        value={`$${totalPrice || "0.00"}`} readonly required />
                </div>
                {/*gallons, price-per-gallon should have 3 decimal places: #.###*/}
                {/*Would like to make readonly inputs lightgray*/}
                <input type="submit" value="Enter"/>
            </form>
        </div>
    )
}

export default FuelQuoteForm;
