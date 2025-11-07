import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    alert(`📩 Password reset link sent to: ${email}`);
  };

  return (
    <div className="login-page page-slide">
      <div className="login-box">
        <h2 className="login-title">Forgot Password?</h2>

        <p style={{ color: "#ddd", marginBottom: "20px", fontSize: "14px" }}>
          Enter your email to receive a password reset link.
        </p>

        <form onSubmit={handleReset}>
          <div className="input-field">
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>

          <button type="submit" className="login-action">Send Reset Link</button>

          <p className="signup-text" style={{ marginTop: "18px" }}>
            Remember your password?{" "}
            <Link to="/login" className="signup-link">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
