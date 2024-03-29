import { CgMail } from "react-icons/cg";
import { IoMdContact } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";

// import bhulogo from "./assests/bhulogo.png";

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='row'>
      <div className="col-12">

        {/* main title and logo */}

        <div>
          {/* <img src={bhulogo}></img> */}
          <h2>Footer Temple</h2>
        </div>

        {/* Contact info Area */}

        <div>
          <h3>Contact info</h3>
          <div>

            <div>
              <p><IoMdContact /></p>
              <a href='#'> Contact Us</a>
            </div>

            <div>
              <p><CgWebsite /></p>
              <a href='#'> info@KashiVishwanth.com</a>
            </div>

            <div>
              <p><TiMessages /></p>
              <a href='#'> Send Your Enquery</a>
            </div>

          </div>

        </div>

        {/* Media Link Area */}

        <div>
          <h3>Media Links</h3>
          <div>

            <div>

              <a href='#'>Temple Services</a>
            </div>

            <div>

              <a href='#'>Login/Register</a>
            </div>

          </div>

        </div>

        {/* Policy Info */}

        <div>
          <h3>Policy Info</h3>
          <div>

            <div>
              <a href='#'> How we Work</a>
            </div>

            <div>
              <a href='#'> Privacy Policy</a>
            </div>

            <div>
              <a href='#'> Term of Use</a>
            </div>

            <div>
              <a href='#'> FAQ</a>
            </div>

            <div>
              <a href='#'> Cancellation & Refund Policy</a>
            </div>

          </div>

        </div>

        {/* Payment gatyway link */}

        <div>

          <h3>Payment Partner</h3>

          <div>
            <img src="#"/>
          </div>

          <div>
            <img src="#"/>
          </div>

          <div>
            <img src="#"/>
          </div>

        </div>

      </div>
    </div>
  )
}


export default Footer;