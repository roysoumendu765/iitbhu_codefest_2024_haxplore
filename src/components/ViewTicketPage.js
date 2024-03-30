import React, { useState } from "react";
import './ViewTicketPage.css';
import List from "./List";
const ViewTicketPage = () => {

    const [listStatus, setListStatus] = useState(false);
    const [idNo, setIdNo] = useState('');
    const clickhandler = () => {
        // console.log("hello");
        idNo===''?console.log("empty"):setListStatus(true);
    }
    const changeHandler=(e)=>{
        setIdNo(e.target.value);
        // console.log(idNo);
    }
    const refresh=()=>{
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
                    <input type="text" value={idNo} onChange={changeHandler}/>
                </div>
                <div className="submitButton">
                    <button className="neumorphic-button" onClick={clickhandler}>
                        View Ticket
                    </button>
                </div>
            </div>
            {
                listStatus && <List idnum={idNo}/>
            }
            {
                listStatus && <button className="neumorphic-button" onClick={refresh}>Refresh</button>
            }
        </div>

    );
}

export default ViewTicketPage;