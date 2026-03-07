import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Laravel API Call
      const response = await axios.post(
        "http://localhost:8000/api/authenticate",
        {
          email: email,
          password: password,
        },
      );

      if (response.data.status === "success") {
        toast.success("Login Successful! Welcome Aman.");

        localStorage.setItem("user_name", response.data.user.name);

        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("incorrect email or password");
      } else {
        toast.error("server error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <ToastContainer autoClose={3000} />
      <div className="card shadow-lg p-4 rounded-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4 fw-bold text-primary">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-bold">Email Address</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-bold"
            disabled={loading}
          >
            {loading ? "Checking..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
