import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Dashboard.css";
import roadmapImage from "../assets/roadmap-illustration.png"; // ✅ Correct import

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="dashboard-page">
      {/* 🔹 Navbar */}
      <nav className="dashboard-navbar">
        <h1 className="dashboard-logo">Career Compass</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </nav>

      {/* 🔹 Main Content */}
      <motion.div
        className="dashboard-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="dashboard-card">
          <div className="dashboard-text">
            <h2 className="dashboard-title">Dynamic Roadmap</h2>
            <p className="dashboard-subtitle">
              Follow a personalized, step-by-step learning journey to become
              job-ready in your dream tech field.
            </p>
            <button
              className="dashboard-btn"
              onClick={() => navigate("/careerrecommendation")}
            >
              Get Started →
            </button>
          </div>

          {/* ✅ Roadmap Illustration */}
          <motion.img
            src={roadmapImage}
            alt="Dynamic Roadmap"
            className="dashboard-img"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
