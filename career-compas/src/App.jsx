import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword"; // ✅ Add this line
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

          {/* 🔄 Forgot Password Page */}
          <Route path="/forgot-password" element={<ForgotPassword />} />  {/* ✅ Add this */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
