import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import SignupLogin from './SignupLogin';
// import AdminLogin from './AdminLogin';

const Header = () => {
  return (
    <div className='header'>
      <div className="heading">
        <h1>TEMPLE TICKET SYSTEM</h1>
      </div>
      <div className='headerRight'>
        <Link to="/" className='buy'>Home</Link>
        <Link to="/" className='buy'>Contact</Link>
        <Link to="/" className='buy'>View Tickets</Link>
        <Link to="/buy" className="buy">Buy Tickets</Link>
      </div>
    </div>
  )
}

export default Header;