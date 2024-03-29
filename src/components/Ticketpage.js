import React from 'react';
import './Ticketpage.css';
import { Link } from 'react-router-dom';

const Ticketpage = () => {
  return (    
    <div className='row mx-2 mt-3'  style={{boxShadow: '1px 1px 5px 1px orange',borderRadius: '20px',background: 'antiquewhite'}}>
        <div className='col-12 col-md-6 mx-auto my-5 d-flex justify-content-around align-items-center'>
            <h4 style={{fontFamily:'revert'}}>Click here to purchase Ticket</h4>
            <Link to="/buy" className='btn bg-warning fw-bold text-white' style={{minWidth : '150px'}}>Book</Link>
        </div>
    </div>
  );
}

export default Ticketpage;
