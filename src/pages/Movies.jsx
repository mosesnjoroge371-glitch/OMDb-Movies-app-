import { useEffect, useState } from "react";
import { searchByType } from "../utils/api";
import MovieCard from "../components/MovieCard";

export default function Movies() {
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
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}
