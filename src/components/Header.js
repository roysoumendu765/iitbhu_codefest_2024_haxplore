import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <div className="heading">
            <h1>TEMPLE TICKET SYSTEM</h1>
        </div>
        <Link to="/buy" className="buy">Buy Tickets</Link>
    </div>
  )
}

export default Header;