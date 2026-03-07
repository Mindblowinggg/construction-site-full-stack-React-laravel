import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Data fetch karne ka function
  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8000/api/services");
      setServices(response.data.data);
    } catch (err) {
      console.error("Fetch Error:", err);
      toast.error("Data load nahi ho pa raha!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Delete function
  const deleteService = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        await axios.delete(`http://localhost:8000/api/services/${id}`);
        toast.warn("Deleted successfully!");
        fetchServices();
      } catch {
        toast.error("Delete nahi ho paya!");
      }
    }
  };

  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-end mb-4">
        <div>
          <Link
            to="/dashboard"
            className="btn btn-sm btn-outline-secondary mb-3"
          >
            ← Back to Dashboard
          </Link>
          <h3 className="fw-bold text-dark mb-0">Services List</h3>
        </div>

        {/* Naya Create Button yahan hai */}
        <Link
          to="/dashboard/services/create"
          className="btn btn-primary shadow-sm px-4 fw-bold"
        >
          + Add New Service
        </Link>
      </div>

      {/* --- SERVICES TABLE --- */}
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="ps-4">Image</th>
                <th>Title</th>
                <th>Content</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="text-center py-5">
                    <div className="spinner-border text-primary spinner-border-sm me-2"></div>
                    Loading Services...
                  </td>
                </tr>
              ) : services.length > 0 ? (
                services.map((service) => (
                  <tr key={service.id}>
                    <td className="ps-4">
                      <img
                        src={`http://localhost:8000/storage/${service.image}`}
                        alt={service.title}
                        className="rounded shadow-sm"
                        style={{
                          width: "60px",
                          height: "45px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td>
                      <span className="fw-bold text-dark">{service.title}</span>
                    </td>
                    <td
                      className="text-muted small"
                      style={{ maxWidth: "300px" }}
                    >
                      {service.short_desc}
                    </td>
                    <td className="text-center">
                      <div className="d-flex justify-content-center gap-2">
                        <Link
                          to={`/dashboard/services/edit/${service.id}`}
                          className="btn btn-outline-info btn-sm rounded-pill px-3"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-outline-danger btn-sm rounded-pill px-3"
                          onClick={() => deleteService(service.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-5 text-muted">
                    Abhi koi services available nahi hain. Nayi service add
                    karein!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
