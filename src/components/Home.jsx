import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>AI Interview & Assessment System</h1>

      <p>
        Welcome to the AI Interview and Assessment platform.
        Please choose one of the options below to continue.
      </p>

      <button onClick={() => navigate("/assessment")}>
        Start Assessment
      </button>

      <button onClick={() => navigate("/interview")}>
        Start Interview
      </button>
    </div>
  );
};

export default Home;
