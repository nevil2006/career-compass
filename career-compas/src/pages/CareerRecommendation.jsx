import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Bookmark, BarChart2, Sparkles } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "../App.css";

// --- Simple 3-role data set ---
const dummyRoles = [
  {
    id: "ai_engineer",
    title: "AI Engineer",
    fit: 92,
    description:
      "Design and build machine learning models that power intelligent products and automation.",
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps"],
    salary: "₹10 – 22 LPA",
    trend: 18,
  },
  {
    id: "backend_developer",
    title: "Backend Developer",
    fit: 87,
    description:
      "Develop reliable server-side logic, APIs, and databases that keep web and mobile apps running.",
    skills: ["Node.js", "Express", "MongoDB", "SQL"],
    salary: "₹7 – 15 LPA",
    trend: 12,
  },
  {
    id: "frontend_developer",
    title: "Frontend Developer",
    fit: 84,
    description:
      "Build modern, responsive web interfaces that connect users seamlessly with data and design.",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    salary: "₹6 – 14 LPA",
    trend: 10,
  },
];

const marketData = [
  { name: "AI Engineer", demand: 18 },
  { name: "Backend Dev", demand: 12 },
  { name: "Frontend Dev", demand: 10 },
];

// --- Safe chart wrapper (prevents white screen) ---
const SafeChart = ({ data }) => (
  <div style={{ width: "100%", height: "200px" }}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 6 }}>
        <XAxis dataKey="name" tickLine={false} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="demand" radius={[6, 6, 6, 6]}>
          {data.map((_, i) => (
            <Cell
              key={i}
              fill={["#60a5fa", "#34d399", "#f472b6"][i % 3]}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const CareerRecommendation = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState(dummyRoles);
  const [favorites, setFavorites] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [userName, setUserName] = useState("Friend");

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("userProfile"));
    if (profile && profile.name) setUserName(profile.name);
    const fav = JSON.parse(localStorage.getItem("favRoles") || "[]");
    setFavorites(fav);
  }, []);

  const toggleFavorite = (roleId) => {
    const updated = favorites.includes(roleId)
      ? favorites.filter((r) => r !== roleId)
      : [...favorites, roleId];
    setFavorites(updated);
    localStorage.setItem("favRoles", JSON.stringify(updated));
  };

  return (
    <div className="career-page">
      {/* Header */}
      <div className="career-hero">
        <div className="hero-left">
          <motion.h1
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-title"
          >
            Welcome {userName}! 👋
          </motion.h1>
          <p className="hero-sub">
            Based on your current skills and interests, here are the top
            technology roles you match with.
          </p>
        </div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="score-card">
            <div className="score-left">
              <BarChart2 size={28} />
              <div>
                <div className="small-muted">Profile Readiness</div>
                <div className="big-number">75%</div>
              </div>
            </div>
            <div className="score-right">
              <Sparkles size={20} />
              <div className="tiny">Top Role</div>
              <div className="bold">AI Engineer</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="career-content">
        <div className="left-column">
          {/* Role Cards */}
          <section className="cards-grid">
            {roles.map((r) => (
              <motion.div
                key={r.id}
                className="career-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="card-head">
                  <h3>{r.title}</h3>
                  <div className="fit-pill">
                    <span className="fit-number">{r.fit}%</span>
                    <span className="fit-text">Match</span>
                  </div>
                </div>

                <p className="card-desc">{r.description}</p>

                <div className="skill-row">
                  {r.skills.map((s) => (
                    <span key={s} className="skill-chip">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="meta-row">
                  <div className="meta-left">
                    <div className="meta-line">
                      <strong>Salary:</strong> {r.salary}
                    </div>
                    <div className="meta-line">
                      <strong>Demand:</strong> +{r.trend}% YoY
                    </div>
                  </div>
                  <div className="meta-actions">
                    <button
                      className="icon-btn"
                      onClick={() => toggleFavorite(r.id)}
                      title="Save Role"
                    >
                      <Bookmark
                        size={16}
                        color={
                          favorites.includes(r.id) ? "#ffd166" : "white"
                        }
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Summary */}
          <section className="ai-summary-panel">
            <h4>Career Summary</h4>
            <p>
              You show strong analytical and programming ability. We recommend
              starting with the <b>AI Engineer</b> path while building solid{" "}
              backend and frontend fundamentals to stay versatile in tech.
            </p>
            <div className="summary-actions">
              <button
                className="primary-btn"
                onClick={() => navigate("/profilesetup")}
              >
                Edit Profile
              </button>
              <button
                className="ghost-btn"
                onClick={() => alert("Summary saved!")}
              >
                Save Summary
              </button>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="right-column">
          <section className="market-card">
            <h5>Market Insights</h5>
            <SafeChart data={marketData} />
            <div className="market-meta">
              <div>
                <strong>Salary Range:</strong> ₹6 – 22 LPA
              </div>
              <div>
                <strong>Top Hiring Regions:</strong> India, Germany, USA
              </div>
            </div>
          </section>

          <section className="compare-panel">
            <h5>Saved Roles</h5>
            {favorites.length === 0 ? (
              <p className="muted">No saved roles yet.</p>
            ) : (
              favorites.map((fid) => {
                const role = roles.find((r) => r.id === fid);
                return (
                  <div className="saved-role" key={fid}>
                    <div>{role.title}</div>
                    <div className="fit-mini">{role.fit}%</div>
                  </div>
                );
              })
            )}
          </section>
        </aside>
      </div>
    </div>
  );
};

export default CareerRecommendation;