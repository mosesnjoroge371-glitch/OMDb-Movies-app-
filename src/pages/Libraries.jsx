import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useMovies } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

export default function Libraries() {
  const navigate = useNavigate();
  const { favorites = [], myList = [] } = useMovies();

  // Display both favorites and my list items
  const allItems = [
    ...new Map(
      [...favorites, ...myList].map((item) => [item.imdbID, item]),
    ).values(),
  ];

  return (
    <div className="page">
      <div className="page-header">
        <button
          className="back-btn"
          onClick={() => navigate("/")}
          aria-label="Go to home"
          title="Go to home"
        >
          <FaArrowLeft />
        </button>
        <h2>My Libraries</h2>
      </div>

      {allItems.length === 0 ? (
        <div className="empty-state">
          <p>Your library is empty. Add movies and shows to get started.</p>
        </div>
      ) : (
        <div className="grid">
          {allItems.map((item) => (
            <MovieCard key={item.imdbID} movie={item} />
          ))}
        </div>
      )}
    </div>
  );
}
