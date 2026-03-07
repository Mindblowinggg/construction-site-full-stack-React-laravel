import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("user_name");

  // Auth Check
  useEffect(() => {
    if (!userName) {
      navigate("/login");
    }
  }, [userName, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user_name");
    toast.info("Logged out successfully!");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  };

  return (
    <div className="bg-light min-vh-100">
      <ToastContainer autoClose={3000} />

      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark shadow-sm px-4">
        <span className="navbar-brand mb-0 h1">Aman Construction Admin</span>
        <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div className="container py-5">
        {/* Header Section */}
        <div className="row">
          <div className="col-md-12 mb-4">
            <h2 className="fw-bold">Welcome Back, {userName}! 👋</h2>
            <p className="text-muted">
              Website manage karne ke liye niche diye gaye option ko chunein.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Only Services Card */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 text-center rounded-4 h-100 border-start border-danger border-4">
              <div className="mb-3">
                <i
                  className="bi bi-gear-wide-connected text-danger"
                  style={{ fontSize: "2rem" }}
                ></i>
              </div>
              <h3 className="fw-bold text-danger">Services</h3>
              <p className="mb-4 text-muted">
                Yahan se aap website ki services edit, add aur delete kar sakte
                hain.
              </p>

              {/* Direct Path Link */}
              <Link
                to="/dashboard/services"
                className="btn btn-danger w-100 rounded-pill py-2 fw-bold"
              >
                Manage Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
