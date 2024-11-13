import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
      <Link className="Logo">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      </div>
      <div className="desktopMenu">
        <Link to="/" className="desktopMenuItem">Home</Link>
        <Link to="/skills" className="desktopMenuItem">Skills</Link>
        <Link to="/about" className="desktopMenuItem">About</Link>
        <Link to="/projects" className="desktopMenuItem">Projects</Link>
        <Link to="/contacts" className="desktopMenuItem">Contacts</Link>
      </div>
      <div>
      <Link to="https://forms.gle/gsEmmYYU41Y3WGzC9" className="desktopBtn">Deferred Connection</Link>
      </div>
    </nav>
  );
}

export default Navbar;