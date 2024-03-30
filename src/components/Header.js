import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SignupLogin from './SignupLogin';
import AdminLogin from './AdminLogin';

const Header = () => {
  return (
    <div className='header'>
        <div className="heading">
            <h1>TEMPLE TICKET SYSTEM</h1>
        </div>
        <div className='loginSignup'>
          <Link to="/Login" className='Login'>Login</Link>
          <Link to="Signup" className='SignUp'>Signup</Link>
        </div>
        <Link to="/buy" className="buy">Buy Tickets</Link>
    </div>
  )
}

export default Header;