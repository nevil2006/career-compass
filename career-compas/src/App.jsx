import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccount from "./pages/CreateAccount"; // ✅ New signup page
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

          {/* 📝 Create Account (Sign Up) Page */}
          <Route path="/signup" element={<CreateAccount />} />

          {/* Optionally, add a 404 or redirect later */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
