// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="App-nav">
      {/* Image on the left side */}
      <NavLink to="/">
        <img src="/images/sign.jpg" alt="Logo" className="nav-logo" />
      </NavLink>

      {/* Navigation links */}
      <NavLink to="/" className="nav-link" activeClassName="active-link">
        Home
      </NavLink>
      <NavLink to="/education" className="nav-link" activeClassName="active-link">
        Education
      </NavLink>
      <NavLink to="/experience" className="nav-link" activeClassName="active-link">
        Experience
      </NavLink>
      <NavLink to="/projects" className="nav-link" activeClassName="active-link">
        Projects
      </NavLink>
      <NavLink to="/contact" className="nav-link" activeClassName="active-link">
        Contact Me
      </NavLink>
    </nav>
  );
};

export default Navbar;
