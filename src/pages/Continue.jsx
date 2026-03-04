import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useMovies } from "../context/MovieContext";

export default function ContinueWatching() {
  const navigate = useNavigate();
  // Provide an empty array as a fallback if 'continueWatching' is undefined or null
  const { continueWatching = [] } = useMovies();

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
        <h1>Continue Watching</h1>
      </div>
      {continueWatching.length === 0 ? (
        <p>No active watching progress.</p>
      ) : (
        continueWatching.map((item) => (
          <div key={item.imdbID}>
            <h4>{item.Title}</h4>
            <progress value={item.progress} max="100"></progress>
          </div>
        ))
      )}
    </div>
  );
}
