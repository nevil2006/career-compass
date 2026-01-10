import React, { useState } from "react";
import { Bell, ChevronDown } from "lucide-react";
import UserMenu from "./UserMenu";
import "../pages/Dashboard.css";
import avatar from "../assets/avatar.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="dashboard-navbar">
      <div className="navbar-left">
        <h1 className="navbar-logo">Career Compass</h1>

        <ul className="nav-links">
          <li>Home</li>
          <li>Roadmap</li>
          <li>AI Career Match</li>
          <li>Resources</li>
          <li>Community</li>
        </ul>
      </div>

      <div className="navbar-right">
        <Bell className="icon" size={20} />

        <div className="user-avatar" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={avatar} alt="User" />
          <ChevronDown
            size={18}
            className={`chevron ${menuOpen ? "open" : ""}`}
          />
        </div>

        {menuOpen && <UserMenu onClose={() => setMenuOpen(false)} />}
      </div>
    </nav>
  );
};

export default Navbar;
