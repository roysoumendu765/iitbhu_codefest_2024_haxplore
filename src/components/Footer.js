import { CgMail } from "react-icons/cg";
import { IoMdContact } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { TbPointFilled } from "react-icons/tb";
import Razorpay from "./assests/razorpay.png";
import upi from "./assests/upi.png";
import paypal from "./assests/paypallogo.png";
import visa from "./assests/visa.png";
import bhulogo from "./assests/bhulogo.png";

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer-Container  ">

      <div className="sub-footer-container">
        {/* main title and logo */}

        <div className="img-title-section">
          <img  src={bhulogo} alt="logo" />
          <h2 className="logo-title">Footer Temple</h2>
        </div>

        {/* Contact info Area */}

        <div >
          <h3 className="footer-sub-title">Contact info</h3>

          <div className="contact-sub-title-content">
            <div className="footer-sub-title-contact">
              <p size={"8rem"}>
                <IoMdContact />
              </p>
              <span >
                <a href="#"> Contact Us</a>
              </span>
            </div>

            <div className="footer-sub-title-contact">
              <p className="icon">
                <CgWebsite />
              </p>
              <span>
                <a href="#"> info@KashiVishwanth.com</a>
              </span>
            </div>

            <div className="footer-sub-title-contact">
              <p className="icon">
                <TiMessages />
              </p>
              <span>
                <a href="#"> Send Your Enquery</a>
              </span>
            </div>
          </div>
        </div>

        {/* Media Link Area */}

        <div>
          <h3 className="footer-sub-title">Media Links</h3>

          <div className="media-sub-title-content">
            <div className="footer-sub-title-media">
              <p className="icon">
                <TbPointFilled />
              </p>
              <a href="#">Temple Services</a>
            </div>

            <div className="footer-sub-title-media">
              <p>
                <TbPointFilled />
              </p>
              <a href="#">Login/Register</a>
            </div>
          </div>
        </div>

        {/* Policy Info */}

        <div>
          <h3 className="footer-sub-title">Policy Info</h3>

          <div className="policy-sub-title-content">
            <div className="footer-sub-title-policy">
              <p>
                <TbPointFilled />
              </p>
              <a href="#"> How we Work</a>
            </div>

            <div className="footer-sub-title-contact">
              <p>
                <TbPointFilled />
              </p>
              <a href="#"> Privacy Policy</a>
            </div>

            <div className="footer-sub-title-contact">
              <p>
                <TbPointFilled />
              </p>
              <a href="#"> Term of Use</a>
            </div>

            <div className="footer-sub-title-contact">
              <p>
                <TbPointFilled />
              </p>
              <a href="#"> FAQ</a>
            </div>

            <div className="footer-sub-title-contact">
              <p>
                <TbPointFilled />
              </p>
              <a href="#"> Cancellation & Refund Policy</a>
            </div>
          </div>
        </div>

        {/* Payment gatyway link */}

        <div>
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

    </div>
  );
};

export default Footer;
