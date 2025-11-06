import React, { useEffect, useState, useRef } from "react";
import "./App.css";

// ✅ Import your local images (case-sensitive and exact)
import aiRoleFinder from "./assets/ai-role-finder.png";
import dynamicRoadmap from "./assets/dynamic-roadmap.png";
import mockInterview from "./assets/mock-interview.png";
import skillGapAnalyzer from "./assets/skill-gap-analyzer.png";
import linkedinBoost from "./assets/linkedin-github-boost.png";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  // Flashcard slides
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

  // Auto switch slides every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Initialize Vanta.js animated background
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
    <div ref={vantaRef} className="vanta-bg">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Career Compass </div>
        <button
          className="login-btn"
          onClick={() => alert("Redirect to Login/Signup Page")}
        >
          Login / Sign Up
        </button>
      </nav>

      {/* Flashcard Section */}
      <div className="content-container">
        <div key={currentIndex} className="slide fade-in">
          <div className="slide-text">
            <h1>{slides[currentIndex].title}</h1>
            <p>{slides[currentIndex].text}</p>
            <button className="see-more-btn">Get Started →</button>
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
  );
}

export default App;
