import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";
import ProfileSetup from "./pages/ProfileSetup";
import CareerRecommendation from "./pages/CareerRecommendation"; // ✅ Add this line
import "./App.css";

function App() {
  return (
    <div className="app-transition">
      <BrowserRouter>
        <Routes>
          {/* 🌊 Landing Page */}
          <Route path="/" element={<HomePage />} />

          {/* 🔐 Login Page */}
          <Route path="/login" element={<LoginPage />} />

          {/* 📝 Create Account Page */}
          <Route path="/signup" element={<CreateAccount />} />

          {/* 👤 Profile Setup Page */}
          <Route path="/profilesetup" element={<ProfileSetup />} />

          {/* 🚀 Career Recommendation Page */}
          <Route path="/careerrecommendation" element={<CareerRecommendation />} /> {/* ✅ This fixes it */}

          {/* 🔄 Forgot Password Page */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
