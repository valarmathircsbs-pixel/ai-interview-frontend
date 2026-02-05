import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div className="card">
        <h1>AI Interview & Assessment System</h1>

        <p>
          Welcome to the AI-powered interview and assessment platform.
          This system evaluates candidates using real-time video and audio.
        </p>

        <ul>
          <li>Live AI Interview</li>
          <li>Online Assessment</li>
          <li>Automated Result Evaluation</li>
        </ul>

        <button onClick={() => navigate("/assessment")}>
          Start Assessment
        </button>

        <button onClick={() => navigate("/interview")}>
          Start Interview
        </button>

        <div className="footer">
          © 2026 AI Interview & Assessment System
        </div>
      </div>
    </div>
  );
};

export default Home;
