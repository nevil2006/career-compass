import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="login-page page-slide">
      <div className="login-box">
        <h2 className="login-title">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="input-field">
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-field">
            <input type="password" required />
            <label>Password</label>
          </div>

          <div className="login-row">
            <label><input type="checkbox" /> Remember me</label>
            <Link to="#" className="forgot">Forgot password?</Link>
          </div>

          <button type="submit" className="login-action">Login</button>

          <p className="signup-text">
            Don’t have an account?{" "}
            <Link to="/signup" className="signup-link">Sign up</Link>
          </p>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;
