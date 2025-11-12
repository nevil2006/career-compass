import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 🌍 Global CSS (used everywhere)
import "./App.css";   // Global gradients, transitions, scrollbars
import "./index.css"; // Basic reset styles

// 📄 Page Components
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";
import ProfileSetup from "./pages/ProfileSetup";
import CareerRecommendation from "./pages/CareerRecommendation";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app-transition">
      <BrowserRouter>
        <Routes>
          {/* 🏠 Landing / Home */}
          <Route path="/" element={<HomePage />} />

          {/* 🔐 Authentication */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* 🧠 Profile Setup (Multi-step form) */}
          <Route path="/profilesetup" element={<ProfileSetup />} />

          {/* 🤖 AI Career Recommendation */}
          <Route
            path="/careerrecommendation"
            element={<CareerRecommendation />}
          />

          {/* 📊 Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
