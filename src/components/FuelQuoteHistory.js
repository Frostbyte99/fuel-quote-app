import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import "../styles.css";

const FuelQuoteHistory = () => {
    const fuelQuote = JSON.parse(localStorage.getItem('fuelQuoteInformation')); //for now
    const clientInfo = fuelQuote.clientInfo;

    return (
        <div>
            <NavBar />
            <div className="tableDiv">
                <table name="history" id="history">
                    <tr>
                        <th>Delivery Date</th>
                        <th>Gallons</th>
                        <th>Total Price</th>
                        <th>Name</th>
                        <th>Address 1</th>
                        <th>Address 2</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zipcode</th>
                    </tr>
                    <tr>
                        <td>{fuelQuote.deliveryDate}</td>
                        <td>{fuelQuote.gallons}</td>
                        <td>${fuelQuote.totalPrice}</td>
                        <td>{clientInfo.fullName}</td>
                        <td>{clientInfo.address1}</td>
                        <td>{clientInfo.address2}</td>
                        <td>{clientInfo.city}</td>
                        <td>{clientInfo.state}</td>
                        <td>{clientInfo.zipcode}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default FuelQuoteHistory;
