import { Link } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaFilm,
  FaTv,
  FaStar,
  FaBroadcastTower,
  FaUser,
  FaPlayCircle,
  FaDownload,
  FaCog,
  FaCreditCard,
  FaQuestionCircle,
  FaTheaterMasks,
  FaBook,
  FaMoon,
} from "react-icons/fa";

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={`sidebar${open ? " open" : ""}`}>
      <button
        className="close-btn"
        onClick={onClose}
        aria-label="Close sidebar"
      >
        ×
      </button>

      <nav>
        <h3>Essential</h3>
        <Link to="/">
          <FaHome /> <span>Home</span>
        </Link>
        <Link to="/search">
          <FaSearch /> <span>Search</span>
        </Link>
        <Link to="/movies">
          <FaFilm /> <span>Movies</span>
        </Link>
        <Link to="/tv">
          <FaTv /> <span>TV Shows</span>
        </Link>
        <Link to="/mylist">
          <FaStar /> <span>My List</span>
        </Link>
        <Link to="/live">
          <FaBroadcastTower /> <span>Live TV</span>
        </Link>

        <h3>Personal</h3>
        <Link to="/profile">
          <FaUser /> <span>Profile</span>
        </Link>
        <Link to="/continue">
          <FaPlayCircle /> <span>Continue Watching</span>
        </Link>
        <Link to="/downloads">
          <FaDownload /> <span>Downloads</span>
        </Link>

        <h3>Account</h3>
        <Link to="/settings">
          <FaCog /> <span>Settings</span>
        </Link>
        <Link to="/account">
          <FaCreditCard /> <span>Account</span>
        </Link>
        <Link to="/help">
          <FaQuestionCircle /> <span>Help</span>
        </Link>

        <h3>More</h3>
        <Link to="/genres">
          <FaTheaterMasks /> <span>Genres</span>
        </Link>
        <Link to="/libraries">
          <FaBook /> <span>My Libraries</span>
        </Link>
        <Link to="/theme">
          <FaMoon /> <span>Dark/Light Mode</span>
        </Link>
      </nav>
    </aside>
  );
}
