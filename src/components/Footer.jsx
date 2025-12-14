import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
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
        {/* Useful Links */}
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/inquiry">Inquiry</Link></li>
          </ul>
        </div>


        {/* Holiday Destinations */}
        <div className="footer-column">
          <h3>Holiday Destinations</h3>
          <ul>
            <li><Link to="/beaches-india">Famous Beaches</Link></li>
            <li><Link to="/india-deserts">Famous Deserts</Link></li>
            <li><Link to="/hill-india">Famous Hill Stations</Link></li>
            <li><Link to="/religious-india">Famous Religious Places</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact us</h3>

          <p className="footer-contact">
            <FaPhoneAlt className="footer-icon" /> +91 9948762577
          </p>
          <p className="footer-contact">
            <FaEnvelope className="footer-icon" /> jagruthipropertydevelopers1@gmail.com
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
