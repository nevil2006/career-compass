import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

// 🧠 Feature Images
import aiRoleFinder from "../assets/ai-role-finder.png";
import dynamicRoadmap from "../assets/dynamic-roadmap.png";
import mockInterview from "../assets/mock-interview.png";
import skillGapAnalyzer from "../assets/skill-gap-analyzer.png";
import linkedinBoost from "../assets/linkedin-github-boost.png";

// 👤 User Images
import boy1 from "../assets/boy1.png";
import boy2 from "../assets/boy2.png";
import girl1 from "../assets/girl1.png";
import girl2 from "../assets/girl2.png";

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const navigate = useNavigate();

  const slides = [
    {
      image: aiRoleFinder,
      title: "AI Role Finder",
      text: "Discover your perfect tech career path with AI-powered insights tailored to your interests and skills.",
    },
    {
      image: dynamicRoadmap,
      title: "Dynamic Roadmap",
      text: "Follow a personalized, step-by-step learning journey to become job-ready in your dream tech field.",
    },
    {
      image: mockInterview,
      title: "Mock Interview Practice",
      text: "Practice real-time interviews powered by AI feedback to improve your confidence and communication.",
    },
    {
      image: skillGapAnalyzer,
      title: "Skill Gap Analyzer",
      text: "Identify and bridge your technical weaknesses through smart analytics and curated resources.",
    },
    {
      image: linkedinBoost,
      title: "LinkedIn + GitHub Boost",
      text: "Enhance your visibility with portfolio integration and recruiter-optimized AI suggestions.",
    },
  ];

  // 🕒 Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // 🌊 Initialize Vanta.js Waves Background
  useEffect(() => {
    if (!vantaEffect.current && window.VANTA) {
      vantaEffect.current = window.VANTA.WAVES({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x0d6efd,
        shininess: 50.0,
        waveHeight: 20.0,
        waveSpeed: 0.8,
        zoom: 0.9,
        backgroundColor: 0x000010,
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div className="main-container">
      {/* 🌊 Hero Section */}
      <div ref={vantaRef} className="vanta-bg">
        {/* 🧭 Navbar */}
        <nav className="navbar">
          <div className="logo">Career Compass</div>
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Login / Sign Up
          </button>
        </nav>

        {/* 💡 Main Slide Section */}
        <div className="content-container">
          <div key={currentIndex} className="slide fade-in">
            <div className="slide-text">
              <h1>{slides[currentIndex].title}</h1>
              <p>{slides[currentIndex].text}</p>
              <button
                className="see-more-btn"
                onClick={() =>
                  document
                    .getElementById("testimonials")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Get Started →
              </button>
            </div>
            <div className="slide-image">
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 👥 Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <img src={girl1} alt="Priya" />
            <p>
              “Career Compass helped me find clarity in my learning path and
              land my first internship in Data Science!”
            </p>
            <h4>Priya S</h4>
            <span>B.Tech AI & DS</span>
          </div>
          <div className="testimonial-card">
            <img src={boy1} alt="R S Hariharan" />
            <p>
              "As a UI/UX designer, I found the platform very intuitive and
              beginner-friendly. Highly recommended for freshers!”
            </p>
            <h4>R S Hariharan</h4>
            <span>UI/UX Designer</span>
          </div>
          <div className="testimonial-card">
            <img src={girl2} alt="Sneha" />
            <p>
              “A platform that truly understands tech students! The dynamic
              roadmap was exactly what I needed.”
            </p>
            <h4>Sneha M</h4>
            <span>Software Engineer</span>
          </div>
          <div className="testimonial-card">
            <img src={boy2} alt="Rahul" />
            <p>
              “I was able to map my skills with job requirements and get real
              feedback from mentors. Great experience!”
            </p>
            <h4>Rahul K</h4>
            <span>Data Analyst</span>
          </div>
        </div>
      </section>

      {/* ⚓ Footer */}
      <footer className="footer">
        <p>© 2025 Career Compass. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
