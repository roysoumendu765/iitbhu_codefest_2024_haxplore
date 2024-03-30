import React, { useState } from "react";
import './ViewTicketPage.css';
import List from "./List";
import Swal from 'sweetalert2';



const ViewTicketPage = () => {
    const [listStatus, setListStatus] = useState(false);
    const [idNo, setIdNo] = useState('');
    const clickhandler = () => {
        // console.log("hello");
        idNo === '' ? sweetError() : setListStatus(true);
    }
    const sweetError = () => {
        Swal.fire({
            title: "Error",
            text: "ID Number can't be empty...",
            icon: "error"
        })
    }
    const sweetSuccess=()=>{
    Swal.fire({
        title: "Success",
        text: "Ticket Generated SuccessFully.",
        icon: "success"
    })
    }
    const changeHandler = (e) => {
        setIdNo(e.target.value);
        // console.log(idNo);
    }
    const refresh = () => {
        setListStatus(false);
        setIdNo('');
    }
    return (
        <div className="outerMost">
            <div className="containerV">
                <div className="selectContainerV">
                    <label htmlFor="idnum">View Tickets By: &nbsp;</label>
                    <select name="idnum" id="idnum">
                        <option value="aadhaarCard">Aadhaar Card</option>
                        <option value="panCard">Pan Card</option>
                        <option value="voterCard">Voter Card</option>
                        <option value="number">Mobile Number</option>
                        <option value=""></option>
                    </select>
                </div>
                <div className="inputContainerV">
                    <label htmlFor="">ID Number: &nbsp;</label>
                    <input type="text" value={idNo} onChange={changeHandler} />
                </div>
                <div className="submitButton">
                    <button className="neumorphic-button" onClick={clickhandler}>
                        View Ticket
                    </button>
                </div>
            </div>
            {
                listStatus && <List idnum={idNo} />
            }
            {
                listStatus && sweetSuccess()
            }
            {
                listStatus && <button className="neumorphic-button" onClick={refresh}>Refresh</button>
            }
        </div>

    );
}

export default ViewTicketPage;