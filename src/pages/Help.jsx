import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Help() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="page-header">
        <button
          className="back-btn"
          onClick={() => navigate("/")}
          aria-label="Go to home"
          title="Go to home"
        >
          <FaArrowLeft />
        </button>
        <h2>Help Center</h2>
      </div>
      <p>If you experience errors, contact support@yourapp.com</p>
    </div>
  );
}
