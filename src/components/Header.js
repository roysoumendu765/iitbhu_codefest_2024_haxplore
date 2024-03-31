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
      <div className='header roboto-medium d-flex  justify-content-between'>
      <div className="heading d-flex">
        <div className='header-icon d-flex justify-content-start align-items-center'>
          <img  src={bhulogo} alt="logo" />
          
        <div className='galada-regular' >
            Divine Pass
        </div>
        </div>
      </div>
      <div className='headerRight d-flex ms-auto'>
        <Link to="/" className='buy'>Home</Link>
        <Link to="/buy" className="buy">Buy Tickets</Link>
        <Link to="/viewTicket" className='buy'>View Tickets</Link>
        <Link to="Adminlogin" className="buy">Admin Login</Link>
        <Link to="/enquiryfrom" className='buy'>Contact</Link>
      </div>
      <div className="d-flex " style={{'alignItems': 'center','fontSize': '1.5rem'}}>
        <GiHamburgerMenu className='hamburgerbtn text-white' />
      </div>
    </div>
  )
}

export default Header;