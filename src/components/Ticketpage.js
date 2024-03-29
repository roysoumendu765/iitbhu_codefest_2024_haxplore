import React from 'react';
import './Ticketpage.css';

const Ticketpage = () => {
  return (    
    <div className='row mx-2 mt-3'  style={{boxShadow: '1px 1px 5px 1px orange',borderRadius: '20px',background: 'antiquewhite'}}>
        <div className='col-12 col-md-6 mx-auto my-5 d-flex justify-content-around align-items-center'>
            <h4 style={{fontFamily:'revert'}}>Click here to purchase Ticket</h4>
            <button className='btn bg-warning fw-bold text-white' style={{minWidth : '150px'}}>Book</button>
        </div>
    </div>
  );
}

export default Ticketpage;
