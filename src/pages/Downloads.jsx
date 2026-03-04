import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useMovies } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

export default function Downloads() {
  const navigate = useNavigate();
  const { downloads } = useMovies();

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
        <h1>Downloads</h1>
      </div>
      <div className="grid">
        {downloads.length === 0 ? (
          <p>No downloads yet.</p>
        ) : (
          downloads.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}
