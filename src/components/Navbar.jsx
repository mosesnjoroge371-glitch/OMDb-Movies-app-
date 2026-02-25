import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  if (!user) return null; // hide navbar on login pages

  return (
    <nav className="navbar">
      <h2>MovieApp</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
