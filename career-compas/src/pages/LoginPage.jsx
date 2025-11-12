import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css"; // ✅ Separate modular CSS file

const LoginPage = () => {
  const navigate = useNavigate();

  // 🔐 Handle Login (navigate to dashboard)
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2 className="login-title">Login</h2>

        <form onSubmit={handleLogin}>
          {/* ✉️ Email Field */}
          <div className="input-field">
            <input type="email" required />
            <label>Email</label>
          </div>

          {/* 🔒 Password Field */}
          <div className="input-field">
            <input type="password" required />
            <label>Password</label>
          </div>

          {/* 🔘 Options Row */}
          <div className="login-row">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" className="forgot">
              Forgot password?
            </Link>
          </div>

          {/* 🚀 Login Button */}
          <button type="submit" className="login-action">
            Login
          </button>

          {/* 🧭 Sign Up Redirect */}
          <p className="signup-text">
            Don’t have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
