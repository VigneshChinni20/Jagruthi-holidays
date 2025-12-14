import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaCommentDots } from "react-icons/fa";
import "./FloatingContact.css";

const FloatingContact = () => {
  return (
    <div className="floating-wrapper">
      <div className="floating-main">
        <FaCommentDots />
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919948762577"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-icon whatsapp"
      >
        <FaWhatsapp />
      </a>

      {/* Phone */}
      <a
        href="tel:+91 9948762577"
        className="floating-icon phone"
      >
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default FloatingContact;
