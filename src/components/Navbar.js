import React from "react";
import { Link } from "react-router-dom";
// import "./styles.css"; // Import styles if needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Suma Portfolio</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
