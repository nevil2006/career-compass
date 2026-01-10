import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 🌍 Global Styles (used across all pages)
import "./App.css";   // gradients, transitions, animations
import "./index.css"; // resets & base typography

// 📄 Page Components
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";
import ProfileSetup from "./pages/ProfileSetup";
import CareerRecommendation from "./pages/CareerRecommendation";

// 🧭 Optional: 404 Page (for unmatched routes)
const NotFound = () => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #000428, #004e92)",
      color: "#fff",
      fontFamily: "Poppins, sans-serif",
    }}
  >
    <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>404</h1>
    <p style={{ fontSize: "1.2rem" }}>Page not found</p>
  </div>
);

function App() {
  return (
    <div className="app-transition">
      <BrowserRouter>
        <Routes>
          {/* 🏠 Home */}
          <Route path="/" element={<HomePage />} />

          {/* 🔐 Authentication */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* 👤 Profile Setup */}
          <Route path="/profilesetup" element={<ProfileSetup />} />

          {/* 🤖 AI Career Recommendation */}
          <Route
            path="/careerrecommendation"
            element={<CareerRecommendation />}
          />

          {/* 🚫 Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
