import "../App.css";
import { useNavigate } from "react-router-dom";

function Assessment() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>AI Assessment</h1>

      <p>
        Please answer the following questions carefully.
        This assessment evaluates your knowledge and skills.
      </p>

      {/* Question 1 */}
      <div className="status">
        <p><b>Q1.</b> What is HTML used for?</p>
        <input type="radio" name="q1" /> Styling webpages <br />
        <input type="radio" name="q1" /> Structuring webpages <br />
        <input type="radio" name="q1" /> Database storage
      </div>

      {/* Question 2 */}
      <div className="status">
        <p><b>Q2.</b> What does CSS stand for?</p>
        <input type="radio" name="q2" /> Creative Style System <br />
        <input type="radio" name="q2" /> Cascading Style Sheets <br />
        <input type="radio" name="q2" /> Computer Style Sheet
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button onClick={() => navigate("/interview")}>
           Submit Assessment & Start Interview
        </button>

       
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>

      <p style={{ textAlign: "center", marginTop: "20px", color: "#6b7280" }}>
        © 2026 AI Interview & Assessment System
      </p>
    </div>
  );
}

export default Assessment;
