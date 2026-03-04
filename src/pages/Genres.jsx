import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { searchByKeyword } from "../utils/api";
import MovieCard from "../components/MovieCard";

export default function Genres() {
  const navigate = useNavigate();
  const [genreMovies, setGenreMovies] = useState([]);

  const fetchGenre = async (genre) => {
    const data = await searchByKeyword(genre);
    if (data.Search) setGenreMovies(data.Search);
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

      <div className="grid">
        {genreMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}
