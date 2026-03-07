import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./assets/css/style.scss";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Login from "./pages/backend/Login";
import Dashboard from "./pages/backend/Dashboard";
import ManageServices from "./pages/backend/ManageServices";
import CreateService from "./pages/backend/CreateService";
import EditService from "./pages/backend/EditService";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const isAuthenticated = () => {
    return localStorage.getItem("user_name") !== null;
  };

  return (
    <>
      <Routes>
        {/* --- PUBLIC ROUTES --- */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />

        {/* --- LOGIN ROUTE --- */}
        <Route
          path="/login"
          element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Login />}
        />

        {/* --- PROTECTED ADMIN ROUTES --- */}
        {/* Dashboard Home */}
        <Route
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
        />

        {/* Manage Services (List View) */}
        <Route
          path="/dashboard/services"
          element={
            isAuthenticated() ? <ManageServices /> : <Navigate to="/login" />
          }
        />

        {/* Create Service  */}
        <Route
          path="/dashboard/services/create"
          element={
            isAuthenticated() ? <CreateService /> : <Navigate to="/login" />
          }
        />

        {/* Edit Service */}
        <Route
          path="/dashboard/services/edit/:id"
          element={
            isAuthenticated() ? <EditService /> : <Navigate to="/login" />
          }
        />

        {/* --- 404 Redirect --- */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;
