import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const KEY = import.meta.env.VITE_OMDB_KEY;

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (title) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&s=${title}`,
      );
      const data = await res.json();
      setMovies(data.Search || []);
    } catch {
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies("Avengers");
  }, []);

  return (
    <>
      <SearchBar onSearch={fetchMovies} />
      <MovieList movies={movies} loading={loading} />
    </>
  );
}
