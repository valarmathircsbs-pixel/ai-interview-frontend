import "../App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>AI Interview & Assessment System</h1>

      <p>
        Welcome to the AI-powered interview and assessment platform.
        This system evaluates candidates using real-time video, audio,
        and automated assessment techniques.
      </p>

      <ul>
        <li>Live AI Interview with Camera & Microphone</li>
        <li>Skill & Knowledge Assessment</li>
        <li>Automated Evaluation & Results</li>
      </ul>

      <div className="button-group">

        <button onClick={() => navigate("/assessment")}>
          Start Assessment
        </button>

        <button onClick={() => navigate("/interview")}>
          Start Interview
        </button>
      </div>

      <p style={{ textAlign: "center", marginTop: "25px", color: "#6b7280" }}>
        © 2026 AI Interview & Assessment System
      </p>
    </div>
  );
}

export default Home;
