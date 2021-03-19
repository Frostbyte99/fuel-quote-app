import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import "../styles.css";

class FuelQuoteHistory extends React.Component {
   
    state = {
        data: [0, -1]
    };
    
    appendRow = () => {
        let { data } = this.state;
        data[data.length-1] = data.length+1;
        data.push(-1);
        this.setState({data});
    };
    
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
        </div>
    )
    }
}

const Row = ({ id }) => {
    const fuelQuote = JSON.parse(localStorage.getItem('fuelQuoteInformation')); //for now

    const clientInfo = fuelQuote!=null ? fuelQuote.clientInfo : null;
    if(id === 0 && (fuelQuote===null || clientInfo===null)){
        return (
            <tr> <td colSpan="9" id="blankLine" height="20px"></td> </tr>
        );
    }
    if(id === -1 || fuelQuote==null || clientInfo==null) {
        return (
            <tr> <td colSpan="9" id="lastLine">End of Fuel Quote History</td> </tr>
        );
        //Note: if clientInfo null, that fuel quote is invalid and should be flagged
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
