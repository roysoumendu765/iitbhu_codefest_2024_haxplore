import React from 'react';
import './Header.css';
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from 'react-router-dom';
// import SignupLogin from './SignupLogin';
// import AdminLogin from './AdminLogin';

const Header = () => {
  return (
      <div className='col-12'>
      <div className='header roboto-medium'>
      <div className="heading">
        <div className='header-icon'></div>
        <div className='galada-regular' >
            Ticket System
        </div>
      </div>
      <div className='headerRight'>
        <Link to="/" className='buy'>Home</Link>
        <Link to="/enquiryfrom" className='buy'>Contact</Link>
        <Link to="/viewTicket" className='buy'>View Tickets</Link>
        <Link to="/buy" className="buy">Buy Tickets</Link>
      </div>
      <div>
        <GiHamburgerMenu className='hamburgerbtn ' />
      </div>
    </div>
      </div>
  )
}

export default Header;