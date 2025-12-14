import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt, FaCommentDots } from "react-icons/fa";
import "./FloatingContact.css";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="floating-wrapper" ref={wrapperRef}>
      {/* Main Button */}
      <div
        className="floating-main"
        onClick={() => setOpen((prev) => !prev)}
      >
        <FaCommentDots />
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919948762577"
        target="_blank"
        rel="noopener noreferrer"
        className={`floating-icon whatsapp ${open ? "show" : ""}`}
      >
        <FaWhatsapp />
      </a>

      {/* Phone */}
      <a
        href="tel:+919948762577"
        className={`floating-icon phone ${open ? "show" : ""}`}
      >
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default FloatingContact;
