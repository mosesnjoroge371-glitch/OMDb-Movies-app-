import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { searchByType } from "../utils/api";
import MovieCard from "../components/MovieCard";

export default function Movies() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(null);
        // example search for popular movie keyword
        const data = await searchByType("Avengers", "movie");
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError("Failed to load movies. Please try again.");
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

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
        <h1>Movies</h1>
      </div>
      {error && <p className="error-message">{error}</p>}
      {loading && <p>Loading movies...</p>}
      {!loading && !error && (
        <div className="grid">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      )}
    </div>
  );
}
