import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Assessment() {
  const navigate = useNavigate();

  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isFormComplete = q1 !== "" && q2 !== "";

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="assessment-page">
      <div className="assessment-card">
        <div className="assessment-header-line"></div>

        <h2>AI Assessment</h2>
        <p>Please answer the following questions carefully.</p>

        {/* Question 1 */}
        <div className="question">
          <p><b>1. What is HTML used for?</b></p>

          <label className="option">
            <input
              type="radio"
              name="q1"
              value="structure"
              onChange={(e) => setQ1(e.target.value)}
            />
            Structuring web pages
          </label>

          <label className="option">
            <input
              type="radio"
              name="q1"
              value="styling"
              onChange={(e) => setQ1(e.target.value)}
            />
            Styling web pages
          </label>

          <label className="option">
            <input
              type="radio"
              name="q1"
              value="database"
              onChange={(e) => setQ1(e.target.value)}
            />
            Database storage
          </label>
        </div>

        {/* Question 2 */}
        <div className="question">
          <p><b>2. What is React?</b></p>

          <label className="option">
            <input
              type="radio"
              name="q2"
              value="library"
              onChange={(e) => setQ2(e.target.value)}
            />
            JavaScript library
          </label>

          <label className="option">
            <input
              type="radio"
              name="q2"
              value="language"
              onChange={(e) => setQ2(e.target.value)}
            />
            Programming language
          </label>

          <label className="option">
            <input
              type="radio"
              name="q2"
              value="database"
              onChange={(e) => setQ2(e.target.value)}
            />
            Database
          </label>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
          <button
            className="submit-btn"
            disabled={!isFormComplete || submitted}
            onClick={handleSubmit}
          >
            Submit Assessment
          </button>

          <button
            className="submit-btn"
            disabled={!submitted}
            onClick={() => navigate("/interview")}
          >
            Start Interview
          </button>

          <button
            className="submit-btn"
            onClick={() => navigate("/")}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Assessment;
