import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { searchByType } from "../utils/api";
import MovieCard from "../components/MovieCard";

export default function Movies() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      // example search for popular movie keyword
      const data = await searchByType("Avengers", "movie");
      if (data.Search) setMovies(data.Search);
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
      <div className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}{" "}
      </div>{" "}
    </div>
  );
}
