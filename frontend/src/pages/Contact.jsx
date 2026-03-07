import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">
        {/* Section 15: Contact Hero */}
        <section className="section-15">
          <div className="hero text-center text-white d-flex align-items-center justify-content-center">
            <div className="container">
              <span className="welcome-text fw-bold">Get In Touch</span>
              <h1 className="mt-3 display-4 fw-bold">Contact Us</h1>
              <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
                Aapke sapno ke ghar ki shuruat ek message se ho sakti hai.
                Humein aaj hi sampark karein!
              </p>
            </div>
          </div>
        </section>

        {/* Section 16: Contact Form & Map */}
        <section className="section-16 py-5">
          <div className="container">
            <div className="row g-5">
              {/* Left Side: Contact Form */}
              <div className="col-lg-7">
                <div className="contact-form-card p-4 p-md-5 shadow-sm rounded-4 bg-white">
                  <h2 className="fw-bold mb-4">Send Us a Message</h2>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Aman Kahar"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-bold">Subject</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Project Inquiry"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-bold">
                          Your Message
                        </label>
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Humein apne project ke baare mein bataiye..."
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary w-100 py-3 fw-bold rounded-pill"
                          style={{ backgroundColor: "#fe538d", border: "none" }}
                        >
                          Send Message Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right Side: Contact Info & Map */}
              <div className="col-lg-5">
                <div className="contact-info-wrapper">
                  <h2 className="fw-bold mb-4">Office Information</h2>

                  <div className="info-item d-flex mb-4">
                    <div className="icon-box me-3">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">Our Location</h5>
                      <p className="text-muted">Vadodara, Gujarat, India</p>
                    </div>
                  </div>

                  <div className="info-item d-flex mb-4">
                    <div className="icon-box me-3">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">Phone Number</h5>
                      <p className="text-muted">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="info-item d-flex mb-4">
                    <div className="icon-box me-3">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">Email Address</h5>
                      <p className="text-muted">
                        info@amankaharconstruction.com
                      </p>
                    </div>
                  </div>

                  {/* Google Map Embed */}
                  <div className="map-container mt-4 rounded-4 overflow-hidden shadow-sm">
                    <iframe
                      title="Google Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.679830536098!2d73.36104447596!3d22.2891963432729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f87d3e790291f%3A0x6b69680c43666d5b!2sParul%20University!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
