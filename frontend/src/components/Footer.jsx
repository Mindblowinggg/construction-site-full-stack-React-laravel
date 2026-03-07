import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-white pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row">
          {/* Column 1: About Company */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-4 text-warning">
              Aman Construction
            </h5>
            <p className="small">
              Building enduring structures with precision and excellence. We
              transform visions into reality with modern technology and
              sustainable practices.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-white text-decoration-none"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-white text-decoration-none"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-white text-decoration-none">
                  Latest Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-4">Services</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Planning & Design
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Project Management
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Renovations
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-4">Contact Info</h5>
            <p className="small mb-2">
              <i className="bi bi-geo-alt-fill me-2"></i> 123 Construction Ave,
              Vadodara, India
            </p>
            <p className="small mb-2">
              <i className="bi bi-telephone-fill me-2"></i> +91 98765 43210
            </p>
            <p className="small">
              <i className="bi bi-envelope-fill me-2"></i>{" "}
              info@amanconstruction.com
            </p>
          </div>
        </div>

        <hr className="bg-white" />

        <div className="row align-items-center">
          <div className="col-md-12 text-center">
            <p className="small mb-0">
              © 2026 Aman Kahar Construction. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
