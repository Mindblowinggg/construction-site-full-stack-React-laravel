import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const CreateService = () => {
  const editor = useRef(null);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    short_desc: "",
    image: null,
  });

  // Jodit Configuration (MS Word jaisi feel ke liye)
  const config = useMemo(
    () => ({
      readonly: false,
      height: 400,
      toolbarSticky: false,
    }),
    [],
  );

  // Normal Inputs handle karne ke liye
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Image handle karne ke liye
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  // Form Submit Logic
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content || content === "<p><br></p>") {
      toast.error("Bhai, content toh likho!");
      return;
    }

    setLoading(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("short_desc", formData.short_desc);
    data.append("content", content);
    data.append("image", formData.image);

    try {
      const res = await axios.post("http://localhost:8000/api/services", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.status === "success") {
        toast.success("New service added sucessfully");
        navigate("/dashboard/services");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Kuch locha hua hai!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold text-dark">Create New Service</h2>
            <Link
              to="/dashboard/services"
              className="btn btn-outline-secondary rounded-pill"
            >
              ← Back to List
            </Link>
          </div>

          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4 p-md-5">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* Service Title */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Service Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control py-2 shadow-none"
                      placeholder="Ex: Luxury Home Construction"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Service Image */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Featured Image</label>
                    <input
                      type="file"
                      className="form-control py-2 shadow-none"
                      onChange={handleFileChange}
                      accept="image/*"
                      required
                    />
                  </div>

                  {/* Short Description */}
                  <div className="col-md-12 mb-3">
                    <label className="form-label fw-bold">
                      Short Description
                    </label>
                    <input
                      type="text"
                      name="short_desc"
                      className="form-control py-2 shadow-none"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Jodit Editor - Full Detail */}
                  <div className="col-md-12 mb-5">
                    <label className="form-label fw-bold">
                      Detailed Content
                    </label>
                    <div className="editor-wrapper">
                      <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        onBlur={(newContent) => setContent(newContent)}
                        onChange={(newContent) => {}}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-md-12 mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-3 fw-bold rounded-pill shadow-sm"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Saving Service...
                        </>
                      ) : (
                        "Publish Service Now"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateService;
