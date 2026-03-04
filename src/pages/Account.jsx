import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Account() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

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
        <h2>Account Info</h2>
      </div>
      <p>Email: {user?.email}</p>
      <p>Subscription Plan: Premium</p>
    </div>
  );
}
