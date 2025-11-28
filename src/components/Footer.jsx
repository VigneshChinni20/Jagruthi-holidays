import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../assets/Logo.png"
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo">
          <img
            src={Logo}  // change path if needed
            alt="Breeze Holidays Logo"
          />
        </div>

        {/* Useful Links */}
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Inquiry</li>
          </ul>
        </div>

        {/* Holiday Destinations */}
        <div className="footer-column">
          <h3>Holiday Destinations</h3>
          <ul>
            <li>Famous Beaches</li>
            <li>Famous Deserts</li>
            <li>Famous Hill Stations</li>
            <li>Famous Religious Places</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact us</h3>

          <p className="footer-contact">
            <FaPhoneAlt className="footer-icon" /> +918125366899
          </p>
          <p className="footer-contact">
            <FaEnvelope className="footer-icon" /> support@debreeze.in
          </p>

          <div className="footer-socials">
            <div><FaFacebookF /></div>
            <div><FaTwitter /></div>
            <div><FaInstagram /></div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        ©2024. Breeze Holidays. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
