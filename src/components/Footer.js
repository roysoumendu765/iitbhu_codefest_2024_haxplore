import { CgMail } from "react-icons/cg";
import { IoMdContact } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { TbPointFilled } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
import Razorpay from "./assests/razorpay.png";
import upi from "./assests/upi.png";
import paypal from "./assests/paypallogo.png";
import visa from "./assests/visa.png";
import bhulogo from "./assests/bhulogo.png";

import React from "react";
import "./Footer.css";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="Footer-Container d-flex flex-column ">

      <div className="sub-footer-container card d-flex flex-column flex-md-row  justify-content-around ">
        {/* main title and logo */}

        <div className="img-title-section card-img-top card box">
          <img  src={bhulogo} alt="logo" />
          <h2 className="logo-title">Footer Temple</h2>
        </div>

        {/* Contact info Area */}

        <div className="card-body bg-warning box">
          <h3 className="footer-sub-title">Contact info</h3>

          <div className="contact-sub-title-content">
            <div className="footer-sub-title-contact">
              <p>
                <IoMdContact />
              </p>
              <span >
                <a href="#"> Contact Us</a>
              </span>
            </div>

            <div className="footer-sub-title-contact">
              <p>
                <CgWebsite />
              </p>
              <span>
                <a href="#"> info@KashiVishwanth.com</a>
              </span>
            </div>

            <div className="footer-sub-title-contact">
              <p>
                <TiMessages />
              </p>
              <span>
                <a href="#"> Send Your Enquery</a>
              </span>
            </div>
          </div>
        </div>

        {/* Media Link Area */}

        <div className=" bg-primary box">
          <h3 className="footer-sub-title">Media Links</h3>

          <div className="media-sub-title-content">
            <div className="footer-sub-title-media">
             
              <a href="#">Temple Services</a>
            </div>

            <div className="footer-sub-title-media">
              
              <a href="#">Login/Register</a>
            </div>
          </div>
        </div>

        {/* Policy Info */}

        <div className="  bg-danger box">
          <h3 className="footer-sub-title">Policy Info</h3>

          <div className="policy-sub-title-content">
            <div className="footer-sub-title-policy">
             
              <a href="#"> How we Work</a>
            </div>

            <div className="footer-sub-title-contact">
              
              <a href="#"> Privacy Policy</a>
            </div>

            <div className="footer-sub-title-contact">
             
              <a href="#"> Term of Use</a>
            </div>

            <div className="footer-sub-title-contact">
             
              <a href="#"> FAQ</a>
            </div>

            <div className="footer-sub-title-contact">
              
              <a href="#"> Cancellation & Refund Policy</a>
            </div>
          </div>
        </div>

        {/* Payment gatyway link */}

        <div className=" card-body bg-success box">
          <h3 className="footer-sub-title">Payment Partner</h3>

          <div className="paymentcard">
            <img src={Razorpay} alt="Razorpaylogo"/>
          </div>

          <div className="paymentcard">
            <img src={paypal} alt="paypallogo" />
          </div>

          <div className="paymentcard">
            <img src={upi}  alt="upilogo"/>
          </div>

          <div className="paymentcard">
            <img src={visa} alt="visalogo" />
          </div>
        </div>
      </div>

      <div className="media-icon">
          <span><a href="#">< BsTwitterX /></a></span>
          <span><a href="#"><FaFacebookF /></a></span>
          <span><a href="#"><BsYoutube /></a></span>
          <span><a href="#"><FaSquareInstagram /></a></span>
          
      </div>
      <div className="copyright">
         <p>Temple</p><span><MdCopyright /></span><p>2024. All Rights Reserved.</p>
        </div>

    </div>
  );
};

export default Footer;
