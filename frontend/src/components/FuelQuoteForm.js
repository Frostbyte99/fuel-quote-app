import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Axios from 'axios';
// import FuelQuoteHistory from "./FuelQuoteHistory";
import "../styles.css";

const FuelQuoteForm = () => {
  const [userID, setUserID] = useState("f30e8d27-e64e-437a-a629-c38ec9ebb4f4");
  const [deliveryDate, setDeliveryDate] = useState();
  const [gallons, setGallons] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [fuelQuoteError, setFuelQuoteError] = useState();
  const [address, setAddress] = useState();

  const [pricePerGallon, setPricePerGallon] = useState();    //Should come from DB

  useEffect(() => {
    const username = sessionStorage.getItem('username') ? sessionStorage.getItem('username') : "";
    Axios.get(`http://127.0.0.1:8000/api/profile-list-user/${username}/`)
      .then((res) => {
        if (res.data[0]) {
          setAddress(
            (res.data[0].address1 + " " + res.data[0].address2).trim()
          );
        } else {
          setAddress("");
        }
      });
    Axios.get(`http://127.0.0.1:8000/api/quote-price/${username}/1/`)
      .then((res) => {
        if(res.data[0]) {
          setPricePerGallon(res.data);
        }
      });
    Axios.get(`http://127.0.0.1:8000/api/quote-list-user/${username}/`)
      .then((res) => {
        localStorage.setItem('fuelQuoteInformation', JSON.stringify(res.data));
      });
    Axios.get(`http://127.0.0.1:8000/api/profile-list-user/${username}/`)
      .then((res) => {
        if(res.data[0]) {
          let clientInfo = {
            userName: username,
            fullName: res.data[0].fullName ? res.data[0].fullName : "",
            address1: res.data[0].address1 ? res.data[0].address1 : "",
            address2: res.data[0].address2 ? res.data[0].address2 : "",
            city: res.data[0].city ? res.data[0].city : "",
            usState: res.data[0].usState ? res.data[0].usState : "",
            zipcode: res.data[0].zipcode ? res.data[0].zipcode : ""
          }
          //console.log("Client Info: "+JSON.stringify(clientInfo));
          sessionStorage.removeItem('clientInfo');
          sessionStorage.setItem('clientInfo', JSON.stringify(clientInfo));
        }
      });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    if(totalPrice <= 0) {
      setFuelQuoteError("Total Price - Must be greater than 0");
      return;
    }
    else {
      setFuelQuoteError("");
    }
    
    const fuelQuote = {
      userID: userID,
      gallons: gallons,
      address: address,
      deliveryDate: deliveryDate,
      totalPrice: totalPrice,
    };

    Axios.post("http://127.0.0.1:8000/api/quote-create/", JSON.stringify(fuelQuote))
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
      });
    
    let storedFuelQuotes = JSON.parse(localStorage.getItem('fuelQuoteInformation'));
    console.log("storedFuelQuotes: "+JSON.stringify(storedFuelQuotes));
    let fuelQuotes = [];
    if((storedFuelQuotes !== undefined || storedFuelQuotes !== null) && Array.isArray(storedFuelQuotes)) {
      for(let i=0; i < storedFuelQuotes.length; i++) {
        if(storedFuelQuotes[i] === undefined || storedFuelQuotes[i] === null) {
          storedFuelQuotes.splice(i, 1);
        }
      }
      fuelQuotes = storedFuelQuotes;
      console.log("--copied--")
    }
    fuelQuotes.push(fuelQuote);
    console.log("fuel quotes: "+JSON.stringify(fuelQuotes));
    
    localStorage.clear(); //clear previous fuelQuoteInformation
    localStorage.setItem('fuelQuoteInformation', JSON.stringify(fuelQuotes));

    //Post to DB:
    const f  = {
      userName: sessionStorage.getItem('username'),
      gallons: gallons,
      address: address,
      deliveryDate: deliveryDate,
      totalPrice: totalPrice
    };
    console.log(f);
    Axios.post('http://127.0.0.1:8000/api/quote-create/', f);
    clearFuelQuote();
  };

  const clearFuelQuote = () => {
    setDeliveryDate("");
    setGallons("")
    setTotalPrice(0);
  };

  const handleGallonChange = (g) => {
    if(g === "") {
      setGallons(undefined);
      setTotalPrice(0);
    }
    else if (Number.isInteger(g * 1000)) {
      //Trim leading & trailing 0's. Format: g = [i or i.###] (where i = floor[g], # = [0-9 or ""])
      setGallons(g.replace(/^0*([0-9]+)(.[0-9]{1,3})?0*/, "$1$2"));
      setTotalPrice(parseFloat(g * pricePerGallon).toFixed(2)); //totalPrice = i.## (# = [0-9])
    }
  };

  return (
    <div>
      <NavBar />
      <div className="text-center flex-direction mt-3 p-3 w-50 flex-column container bg-light border rounded">
        <form
          className="border-0 d-flex align-items-center flex-column mx-auto"
          onSubmit={onSubmit}
        >
          <h2>Enter Your Fuel Quote</h2>
          <div className="form-group">
            <label className="form-label">Delivery Address:</label>
            <input
              type="text"
              name="toAddr"
              id="toAddr"
              className="form-input readonly"
              value={address}
              placeholder="Enter Address in Profile"
              readonly
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="delivery-date" className="form-label">
              Delivery Date:
            </label>
            <input
              type="date"
              name="delivery-date"
              id="delivery-date"
              className="form-input"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.currentTarget.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gallons" className="form-label">
              Gallons:
            </label>
            <input
              type="number"
              name="gallons"
              id="gallons"
              className="form-input"
              value={gallons}
              min="0"
              max="1000000"
              onChange={(e) => handleGallonChange(e.currentTarget.value)}
              step="any"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price-per-gallon" className="form-label">
              Price/Gallon:
            </label>
            <input
              type="text"
              name="price-per-gallon"
              id="price-per-gallon"
              className="form-input readonly"
              value={`$${Math.floor(pricePerGallon * 100) / 100} ${(pricePerGallon * 1000) % 10}/10`}
              readonly
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="total-price" className="form-label">
              Total Price:
            </label>
            <input
              type="text"
              name="total-price"
              id="total-price"
              className="form-input readonly"
              value={`$${totalPrice || "0.00"}`}
              readonly
              required
            />
          </div>
          <p className="text-danger text-left">
            <small>{fuelQuoteError}</small>
          </p>
          <input
            type="submit"
            value="Enter"
            className="login-signup-btn w-50"
          />
        </form>
      </div>
      
      <div className="bottom">
        <Link to="/fuelquotehistory">
          <button>See Fuel Quote History</button>
        </Link>
      </div>
    </div>
  );
};

export default FuelQuoteForm;
