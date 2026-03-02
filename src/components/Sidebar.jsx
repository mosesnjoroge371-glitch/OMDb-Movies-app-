import { Link } from "react-router-dom";

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={`sidebar${open ? " open" : ""}`}>
      {/* close button only visible in drawer mode */}
      <button
        className="close-btn"
        onClick={onClose}
        aria-label="Close sidebar"
      >
        ×
      </button>

      <nav>
        <h3>Essential</h3>
        <Link to="/">🏠 Home</Link>
        <Link to="/search">🔍 Search</Link>
        <Link to="/movies">🎬 Movies</Link>
        <Link to="/tv">📺 TV Shows</Link>
        <Link to="/mylist">⭐ My List</Link>
        <Link to="/live">📡 Live TV</Link>

        <h3>Personal</h3>
        <Link to="/profile">👤 Profile</Link>
        <Link to="/continue">⏯ Continue Watching</Link>
        <Link to="/downloads">⬇️ Downloads</Link>

        <h3>Account</h3>
        <Link to="/settings">⚙️ Settings</Link>
        <Link to="/account">💳 Account</Link>
        <Link to="/help">❓ Help</Link>

        <h3>More</h3>
        <Link to="/genres">🎭 Genres</Link>
        <Link to="/libraries">📚 My Libraries</Link>
        <Link to="/theme">🌗 Dark/Light Mode</Link>
      </nav>
    </aside>
  );
}
