import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import resumePDF from "../../assets/SarthakJainResume_A.pdf";
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container"> 
        <Link to="#" className="Logo" onClick={() => window.open(resumePDF, "_blank")}>
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <h3 className="resume">My Resume</h3>
      </div>

      <div className="desktopMenu">
        <Link to="/" className="desktopMenuItem">Home</Link>
        <Link to="/skills" className="desktopMenuItem">Skills</Link>
        <Link to="/about" className="desktopMenuItem">About</Link>
        <Link to="/projects" className="desktopMenuItem">Projects</Link>
        <Link to="/contacts" className="desktopMenuItem">Contacts</Link>
      </div>
      <div>
        <Link 
          to="https://forms.gle/gsEmmYYU41Y3WGzC9" 
          className="desktopBtn" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Deferred Connection
        </Link>
</div>

    </nav>
  );
}

export default Navbar;