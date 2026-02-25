import { useEffect, useState, useRef, useCallback } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import CategoryBar from "../components/CategoryBar";
const KEY = import.meta.env.VITE_OMDB_KEY;

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("Avengers");
  const [page, setPage] = useState(1);
  const observer = useRef();

  const fetchMovies = async (title, pageNum = 1, append = false) => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&s=${title}&page=${pageNum}`,
      );

      const data = await res.json();

      if (append) {
        setMovies((prev) => [...prev, ...(data.Search || [])]);
      } else {
        setMovies(data.Search || []);
      }
    } catch {
      if (!append) setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  // search handler
  const handleSearch = (text) => {
    setQuery(text);
    setPage(1);
    fetchMovies(text, 1, false);
  };

  // load next page when last movie appears
  const lastMovieRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          const next = page + 1;
          setPage(next);
          fetchMovies(query, next, true);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, page, query],
  );

  useEffect(() => {
    fetchMovies(query, 1);
  }, []);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <CategoryBar onSelect={handleSearch} />

      <MovieList
        movies={movies}
        loading={loading}
        lastMovieRef={lastMovieRef}
      />
    </>
  );
}
