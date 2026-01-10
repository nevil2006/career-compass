import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div className="forgot-page">
      <div className="forgot-box">
        <h2 className="forgot-title">Forgot Password?</h2>
        <p className="forgot-description">
          Enter your registered email address, and we’ll send you a password reset link.
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

          <button type="submit" className="forgot-action">
            Send Reset Link
          </button>

          <p className="signup-text">
            Remember your password?{" "}
            <Link to="/login" className="signup-link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
