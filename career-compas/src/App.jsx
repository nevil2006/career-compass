import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  return (
    <div className="app-transition">
      <BrowserRouter>
        <Routes>
          {/* 🌊 First page (main landing page) */}
          <Route path="/" element={<HomePage />} />

          {/* 🔐 Login page (after clicking Login / Sign Up) */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
