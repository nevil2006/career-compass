import React from "react";
import { useNavigate, Link } from "react-router-dom"; // ✅ Added Link
import "../App.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 🧠 Later, you’ll connect this to backend authentication
    navigate("/"); // redirect to homepage after login
  };

  return (
    <div className="login-bg">
      <div className="login-wrapper">
        <div className="login-card">
          <h2 className="login-title">Login</h2>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="login-submit-btn">
              Login
            </button>
          </form>

          <p className="signup-text">
            Don’t have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
