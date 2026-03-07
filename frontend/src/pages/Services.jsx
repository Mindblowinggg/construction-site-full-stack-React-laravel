import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Link add kiya

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/services");
        setServices(res.data.data);
      } catch (err) {
        console.error("Data fetch karne mein error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">
        {/* Section 9: Services Hero */}
        <section className="section-9">
          <div className="hero">
            <div className="container-fluid">
              <div className="hero-content text-center">
                <span className="welcome-text fw-bold">Our Expertise</span>
                <h1 className="mt-3">Our Services</h1>
                <p className="lead mt-3 mx-auto">
                  High-quality construction and engineering solutions tailored
                  to bring your vision to life with precision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Dynamic Services Grid (Styled exactly like Home) */}
        <section className="section-3 py-5 bg-light">
          <div className="container-fluid px-md-5">
            <div className="section-header text-center mb-5">
              <span
                className="text-uppercase fw-bold"
                style={{ color: "#fe538d" }}
              >
                What We Do
              </span>
              <h2 className="mt-2 fw-bold">Our Construction Services</h2>
            </div>

            <div className="row g-4">
              {loading ? (
                <div className="col-12 text-center py-5">
                  <div
                    className="spinner-border text-primary"
                    role="status"
                  ></div>
                  <p className="mt-2">Loading Services...</p>
                </div>
              ) : services.length > 0 ? (
                services.map((service) => (
                  <div className="col-md-3" key={service.id}>
                    {/* --- HOME PAGE WALA CARD STRUCTURE --- */}
                    <div className="item">
                      <div className="service-image">
                        <img
                          src={`http://localhost:8000/storage/${service.image}`}
                          alt={service.title}
                        />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>{service.title}</h3>
                        </div>
                        <div className="service-content">
                          <p>{service.short_desc}</p>
                          <Link to={`/service/${service.id}`} className="btn">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <h4 className="text-muted">No services found.</h4>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
