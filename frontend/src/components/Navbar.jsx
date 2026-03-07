import React from "react";
import { NavLink, Link } from "react-router-dom"; // NavLink import kiya

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-3">
      <div className="container">
        {/* Left Side: Logo */}
        <Link className="logo" to="/">
          My Project
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Side: Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* NavLink use karein aur "active" class ki zaroorat nahi hai */}
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blogs">
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
