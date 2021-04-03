import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Axios from 'axios';
import "../styles.css";

class FuelQuoteHistory extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [0, -1]
        };
        this.nextId = 0;
        let username = sessionStorage.getItem('username');
        username = username ? username : 0;
        console.log(username); //DEBUG
        Axios.get(`http://127.0.0.1:8000/api/quote-list-user/${username}`)
            .then((res) => {
                console.log("response data: "+res.data);
                //localStorage.setItem('fuelQuoteInformation', res.data);
            });
        const fuelQuotes = JSON.parse(localStorage.getItem('fuelQuoteInformation'));
        let quotesToStore = [];
        console.log("fuelQuotes: "+JSON.stringify(fuelQuotes));
        
        //Verify given information:
        console.log("data: "+this.state.data); //DEBUG
        if(Array.isArray(fuelQuotes)) {
            for(let i = 0; i < this.state.data.length; i++) { //Check if any faulty data in history
                //console.log("--in appendRow checker at index "+i); //DEBUG
                const fuelQuote = fuelQuotes[i];
                const clientInfo = (fuelQuote===undefined || fuelQuote===null) ? null : fuelQuote.clientInfo;
                if((fuelQuote===undefined || fuelQuote===null || clientInfo===null) && this.state.data[i] > 0) {
                    //console.log("before splice: "+this.state.data+" i = "+i); //DEBUG
                    this.state.data.splice(i, 1); //Remove this item
                    i--;
                    //console.log("after splice: "+this.state.data+" i = "+i); //DEBUG
                }
            }
        }
        else {
            const fuelQuote = fuelQuotes;
            const clientInfo = fuelQuote!=null ? fuelQuote.clientInfo : null;
            if((fuelQuote===undefined || fuelQuote===null || clientInfo===null) && this.state.data[0] > 0) {
                this.state.data = [0, -1]; //Reset to default
            }
            else {
                this.state.data = [this.nextId, -1];
            }
            return;
        }

        if(this.state.data[0] < 0) { //Means data = [-1]
            this.state.data = [0, -1];
            //console.log("RESET EMPTY DATA TO DEFAULT"); //DEBUG
            return;
        }

        if(Array.isArray(fuelQuotes)) {
            //console.log("length = "+fuelQuotes.length); //DEBUG
            for(let i=0; i < fuelQuotes.length; i++) {
                console.log("-"+i+"-") //DEBUG
                this.appendRow();
                quotesToStore.push(fuelQuotes[i]);
            }
        }
        else { //Non-array; Only 1 fuel quote
            this.appendRow();
            if(!fuelQuotes) {
                quotesToStore.push(fuelQuotes);
            }
        }
        if(!fuelQuotes) {
            localStorage.clear();
            localStorage.setItem('fuelQuoteInformation', JSON.stringify(quotesToStore)); //Makes a new item, instead of updating for some reason
        }
    }
    
    appendRow = () => {
        this.nextId += 1;
        
        if(this.state.data[0] === 0) { this.state.data.shift() } //Remove default empty row
        
        this.state.data[this.state.data.length-1] = this.nextId; //Overwrite end of history row with new row id
        this.state.data.push(-1); //Add end of history row
        //console.log(this.state.data); //DEBUG
        //this.state.data = data;
    };

    clearLocalHistory = () => {
        this.state = [0, -1];
        localStorage.clear();
    }
    
    render(){
    return (
        <div>
            <NavBar />
            <div className="tableDiv">
                <table name="history" id="history">
                    <thead>
                        <th>Delivery Date</th>
                        <th>Gallons</th>
                        <th>Total Price</th>
                        <th>Name</th>
                        <th>Address 1</th>
                        <th>Address 2</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zipcode</th>
                    </thead>
                    <tbody>
                        {this.state.data.map(id => ( <Row id = {id} /> ))}
                    </tbody>
                </table>
            </div>
            <div className="bottom">
                <Link to="/fuelquotehistory">
                    <button onClick={this.clearLocalHistory}><b>CLEAR</b> Fuel Quote History</button>
                </Link>
            </div>
        </div>
    )
    }
}

const Row = ({ id }) => {
    if(id < 0) {
        return (
            <tr> <td colSpan="9" id="lastLine">End of Fuel Quote History</td> </tr>
        );
    }
    const fuelQuotes = JSON.parse(localStorage.getItem('fuelQuoteInformation')); //for now
    const fuelQuote = Array.isArray(fuelQuotes) ? (id===0 ? fuelQuotes[0]: fuelQuotes[id-1]) : fuelQuotes;
    //console.log(JSON.stringify(fuelQuotes)); //DEBUG
    //console.log(JSON.stringify(fuelQuote)); //DEBUG
    const clientInfo = fuelQuote!=null ? fuelQuote.clientInfo : null;
    //console.log(JSON.stringify(clientInfo)); //DEBUG
    
    //Note: if clientInfo is null, that fuel quote is invalid and should be flagged
    if(id === 0 && (fuelQuote===null || clientInfo===null)){
        return (
            <tr> <td colSpan="9" id="blankLine" height="20px"></td> </tr>
        );
    }
    if(id > 0 && (fuelQuote===null || clientInfo===null)){
        return (
            <tr> <td colSpan="9" id="blankLine" height="20px">Cleared</td> </tr>
        );
    }

    return (
        <tr id={`row-${id}`}>
            <td>{fuelQuote.deliveryDate}</td>
            <td>{fuelQuote.gallons}</td>
            <td>${fuelQuote.totalPrice}</td>
            <td>{clientInfo.fullName}</td>
            <td>{clientInfo.address1}</td>
            <td>{clientInfo.address2}</td>
            <td>{clientInfo.city}</td>
            <td>{clientInfo.usState}</td>
            <td>{clientInfo.zipcode}</td>
        </tr>
    )
}

export default FuelQuoteHistory;
