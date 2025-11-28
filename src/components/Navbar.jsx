import React from "react";
import "./Navbar.css";
import { FaChevronDown } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import { useNavigate, Link } from "react-router-dom";   // <-- Added Link

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const contactOnHome = document.getElementById("contact");
        if (contactOnHome) {
          contactOnHome.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="nav-logo">
        <img src={Logo} alt="logo" />
      </div>

      {/* Menu */}
      <ul className="nav-menu">

        <li onClick={() => navigate("/")}>Home</li>

        <li onClick={() => navigate("/about")}>About Us</li>

        <li onClick={scrollToContact}>Contact Us</li>

        {/* ---- DROPDOWN ---- */}
        <li className="dropdown">
          <span className="dropdown-title">Holiday Destinations ▾</span>

          <ul className="dropdown-menu">

            <li>
              <Link to="/beaches-india" className="dropdown-link">
                Famous Beaches
              </Link>
            </li>

            <li>
              <Link to="/india-jungles" className="dropdown-link">
                Famous Jungles
              </Link>
            </li>

            <li>
              <Link to="/india-deserts" className="dropdown-link">
                Famous Deserts
              </Link>
            </li>

            <li>
              <Link to="/hill-india" className="dropdown-link">
                Famous Hill Stations
              </Link>
            </li>

            <li>
              <Link to="/religious-india" className="dropdown-link">
                Famous Religious Places
              </Link>
            </li>

          </ul>
        </li>

      </ul>

      {/* Right Button */}
      <div className="nav-btn" onClick={scrollToContact}>
        Contact us
      </div>

    </nav>
  );
};

export default Navbar;
