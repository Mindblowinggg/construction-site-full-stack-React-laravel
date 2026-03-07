import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Villa",
      category: "Residential",
      img: "https://picsum.photos/id/1031/600/700",
    },
    {
      id: 2,
      title: "Hub",
      category: "Commercial",
      img: "https://images.unsplash.com/photo-1564471925181-982d3a6c1a3f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Township",
      category: "Infrastructure",
      img: "https://images.unsplash.com/photo-1633629892267-47a699468773?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Apartment",
      category: "Residential",
      img: "https://images.unsplash.com/photo-1685446131868-267c275ab4a7?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Tower",
      category: "Commercial",
      img: "https://images.unsplash.com/photo-1681197841681-543ec02922a7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Bridge",
      category: "Infrastructure",
      img: "https://images.unsplash.com/photo-1506946526854-9aad1ec915cb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">
        {/* Section 11: Projects Hero */}
        <section className="section-11">
          <div className="hero">
            <div className="container-fluid">
              <div className="hero-content text-center">
                <span className="welcome-text fw-bold">Our Portfolio</span>
                <h1 className="mt-3">Our Projects</h1>
                <p className="lead mt-3 mx-auto">
                  A glimpse of the iconic structures and sustainable projects we
                  have delivered across the country.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 12: Project Grid */}
        <section className="section-12 py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span
                className="text-uppercase fw-bold"
                style={{ color: "#fe538d", letterSpacing: "2px" }}
              >
                Success Stories
              </span>
              <h2 className="display-5 fw-bold mt-2">Completed Masterpieces</h2>
            </div>

            <div className="row g-4">
              {projectList.map((project) => (
                <div className="col-lg-4 col-md-6" key={project.id}>
                  <div className="project-card">
                    <div className="project-img-container">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="img-fluid"
                      />
                      <div className="project-overlay">
                        <span className="category-badge">
                          {project.category}
                        </span>
                        <h4 className="text-white mt-2">{project.title}</h4>
                        <button className="btn btn-primary btn-sm mt-3">
                          View Details
                        </button>
                      </div>
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

export default Projects;
