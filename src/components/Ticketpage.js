import React from 'react';
import './Ticketpage.css';
import { Link } from 'react-router-dom';

const Ticketpage = () => {
  return (    
    <div className='container'>
      <div className="clichere">
        Click Here To  Buy A Ticket!
      </div>
      <Link to="/buy" className="click">
        Click Here
      </Link>
    </div>
  );
}

export default Ticketpage;
