import React, { useState } from "react";
import nicoLogo from '/NicoLogo.png'
import './NavBar.css'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <a href="#" target="_blank">
          <img src={nicoLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div><h1>React Skills</h1></div>
      <div className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navbar-mobile-toggle" onClick={toggleMobileMenu}>
        <i className={`fas fa-bars ${isMobileMenuOpen ? "open" : ""}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
