import React from 'react';
import './Header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import bhulogo from "./assests/divine pass.png";
import { Link } from 'react-router-dom';
// import SignupLogin from './SignupLogin';
// import AdminLogin from './AdminLogin';

const Header = () => {
  
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  console.log(isMobile)
  return (
      <div className='header roboto-medium'>
      <div className="heading">
        <div className='header-icon'>
          <img  src={bhulogo} alt="logo" />
        </div>
        <div className='galada-regular' >
            Divine Pass
        </div>
      </div>
      <div className='headerRight'>
        <Link to="/" className='buy'>Home</Link>
        <Link to="/enquiryfrom" className='buy'>Contact</Link>
        <Link to="/viewTicket" className='buy'>View Tickets</Link>
        <Link to="/buy" className="buy">Buy Tickets</Link>
        <Link to="Adminlogin" className="buy">Admin Login</Link>
      </div>
      <div>
        {/* <GiHamburgerMenu className='hamburgerbtn text-white' /> */}
      </div>
    </div>
  )
}

export default Header;