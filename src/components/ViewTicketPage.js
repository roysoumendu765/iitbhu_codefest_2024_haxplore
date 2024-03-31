import React, { useState } from "react";
import './ViewTicketPage.css';
import List from "./List";
import Swal from 'sweetalert2';
import axios from "axios";



const ViewTicketPage = () => {
    const [listStatus, setListStatus] = useState(false);
    const [idNo, setIdNo] = useState('');

    const clickhandler = () => {
        // console.log("hello");
        idNo === '' ? sweetError("ID Number can't be empty...") : checkData();
        // setListStatus(true);
    }
    const sweetError = (msg) => {
        Swal.fire({
            title: "Error",
            text: msg,
            icon: "error"
        })
    }
    const sweetSuccess = () => {
        Swal.fire({
            title: "Success",
            text: "Ticket Fetched SuccessFully.",
            icon: "success"
        })
    }
    const changeHandler = (e) => {
        setIdNo(e.target.value);
        // console.log(idNo);
        // console.log(e.target.value);
    }
    const refresh = () => {
        setListStatus(false);
        setIdNo('');
    }
    const checkData = async () => {
        let status = true;
        try {
            const res = await axios.get(`http://localhost:8000/booking/getData/${idNo}`);
            status = res.data.length === 0 ? false : true;
            setListStatus(status);
            if (!status) {
                sweetError("Ticket Not Found");
                // console.log(status);
                // console.log(listStatus);
                // return false;
            }
        } catch (error) {
            sweetError("Network Error");
            status = false; // Set status to false in case of error
        }
        return false;
    };

    return (
        <div className="row outerMost">
            <div className="col-10  col-md-5 col-lg-4 mx-auto containerV formContainer my-5">
                <div className="inputContainerV ">
                    <label htmlFor="" className="neumorphic-label me-5 text-center">ID Number: &nbsp;</label>
                    <input type="text" className="neumorphic-input" value={idNo} onChange={changeHandler} />
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