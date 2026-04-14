import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { searchByKeyword } from "../utils/api";
import MovieCard from "../components/MovieCard";

export default function Genres() {
  const navigate = useNavigate();
  const [genreMovies, setGenreMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGenre = async (genre) => {
    try {
      setLoading(true);
      setError(null);
      const data = await searchByKeyword(genre);
      if (data.Search) {
        setGenreMovies(data.Search);
      } else {
        setGenreMovies([]);
      }
    } catch (err) {
      console.error("Error fetching genre:", err);
      setError("Failed to load genre. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
        <h2>Genres</h2>
      </div>
      <button onClick={() => fetchGenre("Sci-Fi")}>Sci-Fi</button>
      <button onClick={() => fetchGenre("Thriller")}>Thriller</button>
      <button onClick={() => fetchGenre("Anime")}>Anime</button>
      <button onClick={() => fetchGenre("Romance")}>Romance</button>

      {error && <p className="error-message">{error}</p>}
      {loading && <p>Loading...</p>}
      <div className="grid">
        {genreMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}
