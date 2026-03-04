import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Settings() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

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
        <h2>Settings</h2>
      </div>
      <button onClick={toggleTheme}>
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
