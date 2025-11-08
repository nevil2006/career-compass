import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";


const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    department: "",
    github: "",
    linkedin: "",
    phone: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [otpSent, setOtpSent] = useState({ phone: false, email: false });
  const [otpVerified, setOtpVerified] = useState({ phone: false, email: false });
  const [showPassRules, setShowPassRules] = useState(false);

  // ✅ NEW: Show/Hide password toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password Validation Rules
  const passwordChecks = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
  };

  const isPasswordValid =
    passwordChecks.length &&
    passwordChecks.uppercase &&
    passwordChecks.number &&
    passwordChecks.special;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGithubAuth = () => alert(" GitHub authenticated successfully!");
  const handleLinkedInAuth = () => alert(" LinkedIn authenticated successfully!");
  const sendOtp = (type) => {
    setOtpSent({ ...otpSent, [type]: true });
    alert(` OTP sent to your ${type}!`);
  };
  const verifyOtp = (type) => {
    setOtpVerified({ ...otpVerified, [type]: true });
    alert(` ${type.toUpperCase()} verified successfully!`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!otpVerified.phone || !otpVerified.email) {
      alert(" Please verify both phone and email before submitting.");
      return;
    }

    if (!isPasswordValid) {
      alert(" Password does not meet the required conditions.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert(" Passwords do not match.");
      return;
    }

    alert(" Account created successfully!");
  };

  return (
    <div className="login-bg">
      <div className="login-wrapper">
        <div className="login-card" style={{ width: "480px" }}>
          <h2 className="login-title">Create Account</h2>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>College Name</label>
              <input type="text" name="college" placeholder="Your college or university" value={formData.college} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Department</label>
              <input type="text" name="department" placeholder="E.g. AI & Data Science" value={formData.department} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>GitHub Profile</label>
              <div className="flex-input">
                <input type="url" name="github" placeholder="https://github.com/username" value={formData.github} onChange={handleChange} required />
                <button type="button" className="auth-btn" onClick={handleGithubAuth}>Authenticate</button>
              </div>
            </div>

            <div className="form-group">
              <label>LinkedIn Profile</label>
              <div className="flex-input">
                <input type="url" name="linkedin" placeholder="https://linkedin.com/in/username" value={formData.linkedin} onChange={handleChange} required />
                <button type="button" className="auth-btn" onClick={handleLinkedInAuth}>Authenticate</button>
              </div>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <div className="flex-input">
                <input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
                {!otpSent.phone ? (
                  <button type="button" className="auth-btn" onClick={() => sendOtp("phone")}>Send OTP</button>
                ) : otpVerified.phone ? (
                  <span className="verified-text">✔ Verified</span>
                ) : (
                  <button type="button" className="auth-btn" onClick={() => verifyOtp("phone")}>Verify</button>
                )}
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <div className="flex-input">
                <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                {!otpSent.email ? (
                  <button type="button" className="auth-btn" onClick={() => sendOtp("email")}>Send OTP</button>
                ) : otpVerified.email ? (
                  <span className="verified-text">✔ Verified</span>
                ) : (
                  <button type="button" className="auth-btn" onClick={() => verifyOtp("email")}>Verify</button>
                )}
              </div>
            </div>

            {/* ✅ Password with Show/Hide Toggle */}
            <div className="form-group password-wrapper">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setShowPassRules(true)}
                required
              />

              <span className="toggle-eye" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </span>

              {showPassRules && (
                <div className="password-rules">
                  <p className={passwordChecks.length ? "valid" : "invalid"}>• At least 8 characters</p>
                  <p className={passwordChecks.uppercase ? "valid" : "invalid"}>• At least 1 uppercase letter</p>
                  <p className={passwordChecks.number ? "valid" : "invalid"}>• Contains a number</p>
                  <p className={passwordChecks.special ? "valid" : "invalid"}>• Contains a special character</p>
                </div>
              )}
            </div>

            {/* ✅ Confirm Password with Show/Hide Toggle */}
            <div className="form-group password-wrapper">
              <label>Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <span className="toggle-eye" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </span>

              {formData.confirmPassword && (
                <p className={formData.password === formData.confirmPassword ? "valid" : "invalid"}>
                  {formData.password === formData.confirmPassword ? "✔ Passwords match" : "✖ Passwords do not match"}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select name="gender" className="select-input" value={formData.gender} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefer_not">Prefer not to say</option>
              </select>
            </div>

            <button type="submit" className="login-submit-btn">Submit</button>
          </form>
              <p className="signup-text">
                Already have an account? <Link to="/login" className="signup-link">Login</Link>
              </p>


        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
