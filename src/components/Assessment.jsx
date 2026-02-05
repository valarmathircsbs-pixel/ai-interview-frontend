import React from "react";
import { useNavigate } from "react-router-dom";

const Assessment = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>AI Assessment</h1>

      <p>Answer the following questions carefully.</p>

      <div>
        <p>1. What is HTML?</p>
        <input type="text" placeholder="Your answer" />
      </div>

      <div>
        <p>2. What is React?</p>
        <input type="text" placeholder="Your answer" />
      </div>

      <br />

      <button onClick={() => navigate("/interview")}>
        Submit Assessment
      </button>
    </div>
  );
};

export default Assessment;
