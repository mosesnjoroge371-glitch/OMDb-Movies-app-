import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useMovies } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

export default function MyList() {
  const navigate = useNavigate();
  const { myList = [] } = useMovies();

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
        <h2>My List</h2>
      </div>

      {myList.length === 0 ? (
        <div className="empty-state">
          <p>You haven't added anything to your list yet.</p>
        </div>
      ) : (
        <div className="grid">
          {myList.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
