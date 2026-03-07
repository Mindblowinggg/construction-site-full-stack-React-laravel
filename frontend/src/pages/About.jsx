import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">
        {/* Section 7: About Hero */}
        <section className="section-7">
          <div className="hero">
            <div className="container-fluid">
              <div className="hero-content text-center">
                <h1>About Us</h1>
                <p className="lead mt-3 mx-auto">
                  Aman Kahar Construction provides top-tier engineering
                  solutions and sustainable infrastructure projects for a better
                  tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Our Professional Team */}
        <section className="section-8 py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span
                className="welcome-text fw-bold text-uppercase"
                style={{ color: "#fe538d", letterSpacing: "2px" }}
              >
                Our Experts
              </span>
              <h2 className="display-5 fw-bold mt-2">
                Meet Our Dedicated Team
              </h2>
              <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
                Hamari team mein industry ke best engineers aur architects hain
                jo har project ko perfection ke sath deliver karte hain.
              </p>
            </div>

            <div className="row g-4">
              {[
                {
                  name: "Aman Kahar",
                  role: "Founder & CEO",
                  // Indian Professional Male (CEO vibe)
                  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
                },
                {
                  name: "Rajesh Kumar",
                  role: "Senior Civil Engineer",
                  // Indian Male Engineer on site (or formal)
                  img: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?q=80&w=1974&auto=format&fit=crop",
                },
                {
                  name: "Priya Sharma",
                  role: "Chief Architect",
                  // Indian Female Architect/Professional
                  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
                },
                {
                  name: "Vikram Singh",
                  role: "Project Manager",
                  // Indian Male Professional
                  img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
                },
              ].map((member, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="team-card text-center shadow-sm">
                    <div className="team-img-wrapper position-relative">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="img-fluid rounded-4"
                      />
                      {/* LinkedIn React Icon Overlay */}
                      <div className="social-overlay">
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noreferrer"
                          className="linkedin-link"
                        >
                          <FaLinkedin />
                        </a>
                      </div>
                    </div>
                    <div className="team-info mt-3 px-2">
                      <h5 className="fw-bold mb-1">{member.name}</h5>
                      <p className="text-muted small mb-3">{member.role}</p>
                      <button className="btn btn-outline-pink btn-sm w-100 rounded-pill mb-2">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
