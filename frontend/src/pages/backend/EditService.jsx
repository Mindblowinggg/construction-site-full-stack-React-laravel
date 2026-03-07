import React, { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";

const EditService = () => {
  const { id } = useParams(); // URL se ID pakadne ke liye
  const editor = useRef(null);
  const navigate = useNavigate();

  // States
  const [loading, setLoading] = useState(false); // Submit button ke liye
  const [fetching, setFetching] = useState(true); // Initial data load ke liye
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    short_desc: "",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(""); // Image preview dikhane ke liye

  // Purana data fetch karo (GET Method)
  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/services/${id}`);
        if (res.data.status === "success") {
          const service = res.data.data;
          setFormData({
            title: service.title,
            short_desc: service.short_desc,
            image: null, // Shuruat mein null rahega
          });
          setContent(service.content || "");
          setPreviewImage(`http://localhost:8000/storage/${service.image}`);
        }
      } catch (err) {
        console.error("Fetch Error:", err);
        toast.error("Data load nahi ho paya!");
        navigate("/dashboard/services");
      } finally {
        setFetching(false);
      }
    };
    fetchService();
  }, [id, navigate]);

  // Jodit Editor Config
  const config = useMemo(
    () => ({
      readonly: false,
      height: 300,
    }),
    [],
  );

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // File change handler (Image Preview ke saath)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // --- 2. Update Function (Method Spoofing) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("short_desc", formData.short_desc);
    data.append("content", content);

    if (formData.image) {
      data.append("image", formData.image);
    }

    data.append("_method", "PUT");

    try {
      const res = await axios.post(
        `http://localhost:8000/api/services/${id}`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      if (res.data.status === "success") {
        toast.success("Service successfully update ho gayi!");
        navigate("/dashboard/services");
      }
    } catch (err) {
      console.error("Update Error:", err.response);
      toast.error("Update fail ho gaya! Check console.");
    } finally {
      setLoading(false);
    }
  };

  // Jab tak data fetch ho raha hai
  if (fetching) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Please wait...</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold text-dark">Edit Construction Service</h2>
            <Link
              to="/dashboard/services"
              className="btn btn-outline-secondary rounded-pill"
            >
              ← Back to List
            </Link>
          </div>

          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* Title Input */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Service Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      className="form-control"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Image Upload & Preview */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">
                      Change Image (Optional)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                    {previewImage && (
                      <div className="mt-2">
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="rounded shadow-sm"
                          style={{
                            height: "70px",
                            width: "100px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Short Desc Input */}
                  <div className="col-md-12 mb-3">
                    <label className="form-label fw-bold">
                      Short Description
                    </label>
                    <input
                      type="text"
                      name="short_desc"
                      value={formData.short_desc}
                      className="form-control"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Jodit Editor */}
                  <div className="col-md-12 mb-4">
                    <label className="form-label fw-bold">Full Content</label>
                    <JoditEditor
                      ref={editor}
                      value={content}
                      config={config}
                      onBlur={(newContent) => setContent(newContent)}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-3 fw-bold rounded-pill shadow-sm"
                      disabled={loading}
                    >
                      {loading ? "Updating..." : "Update Service Now"}
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

export default EditService;
