import React from "react";
import "./Result.css";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get data from previous page
  const { type } = location.state || { type: "Interview" };

  // Dynamic score (demo purpose)
  const score = Math.floor(Math.random() * 41) + 60; // 60–100%

  return (
    <div className="result-page">
      <div className="result-card">
        <h1>🎉 Result Summary</h1>

        <p className="type">
          {type === "Assessment"
            ? "AI Assessment Result"
            : "AI Interview Result"}
        </p>

        <div className="score">
          <span>{score}%</span>
        </div>

        <p className="status">
          {score >= 70
            ? "✅ Congratulations! You have passed."
            : "❌ Better luck next time."}
        </p>

        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    </div>
  );
};

export default Result;
