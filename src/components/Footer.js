import { CgMail } from "react-icons/cg";
import { IoMdContact } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import bhulogo from "./assests/bhulogo.png"

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer-Container  ">

      <div className="sub-footer-container">

        {/* main title and logo */}

        <div className="img-title-section">
          <img className="logo" src={bhulogo} alt ="logo"/>
          <h2 className="logo-title">Footer Temple</h2>
        </div>

        {/* Contact info Area */}

        <div>
          <h3 className="footer-sub-title">Contact info</h3>
          <div>

            <div className="footer-sub-title-contact">
              <p><IoMdContact /></p>
              <span><a href='#'> Contact Us</a></span>
            </div>

            <div className="footer-sub-title-contact">
              <p><CgWebsite /></p>
              <span><a href='#'> info@KashiVishwanth.com</a></span>
            </div>

            <div className="footer-sub-title-contact">
              <p><TiMessages /></p>
             <span> <a href='#'> Send Your Enquery</a></span>
            </div>

          </div>

        </div>

        {/* Media Link Area */}

        <div>
          <h3 className="footer-sub-title">Media Links</h3>
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
          <h3 className="footer-sub-title">Policy Info</h3>
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

          <h3 className="footer-sub-title">Payment Partner</h3>

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