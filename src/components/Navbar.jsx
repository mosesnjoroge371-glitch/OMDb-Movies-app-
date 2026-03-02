import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ onMenuClick, showMenuButton = true }) {
  const { user, logout } = useAuth();

  if (!user) return null; // hide navbar on login pages

  return (
    <nav className="navbar">
      {showMenuButton && (
        <button
          className="hamburger"
          onClick={onMenuClick}
          aria-label="Open sidebar"
        >
          ☰
        </button>
      )}

      <h2 className="logo">🎥🎥 MovieApp</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
