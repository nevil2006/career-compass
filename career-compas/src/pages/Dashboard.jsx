import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen text-white bg-gradient-to-b from-blue-900 to-blue-600">
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-950">
        <h1 className="text-2xl font-bold">Career Compass</h1>
        <button className="px-5 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 transition">
          Logout
        </button>
      </nav>

      <div className="flex flex-1 items-center justify-center">
        <div className="bg-blue-800/70 rounded-3xl shadow-lg p-10 flex items-center space-x-10">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-cyan-300">
              Dynamic Roadmap
            </h2>
            <p className="text-lg text-gray-200 mb-6">
              Follow a personalized, step-by-step learning journey to become job-ready in your dream tech field.
            </p>
            <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-3 rounded-lg">
              Get Started →
            </button>
          </div>
          <img
            src="/roadmap-illustration.png"
            alt="Dynamic Roadmap"
            className="w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
