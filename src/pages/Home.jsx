import { useEffect, useState, useRef, useCallback } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import CategoryBar from "../components/CategoryBar";
const KEY = import.meta.env.VITE_OMDB_KEY;

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
const starterQueries = [
  "batman",
  "naruto",
  "harry potter",
  "romance",
  "action",
  "thriller",
  "sci fi",
  "animation",
  "series",
  "comedy",
];

const randomStarter =
  starterQueries[Math.floor(Math.random() * starterQueries.length)];

const [query, setQuery] = useState(randomStarter);  const [page, setPage] = useState(1);
  const observer = useRef();

  const fetchMovies = async (title, pageNum = 1, append = false) => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&s=${title}&page=${pageNum}`,
      );

      const data = await res.json();

      let results = data.Search || [];

      // 🔥 Fix missing posters
      const fixedResults = await Promise.all(
        results.map(async (movie) => {
          if (movie.Poster === "N/A") {
            const detailRes = await fetch(
              `https://www.omdbapi.com/?apikey=${KEY}&i=${movie.imdbID}`,
            );
            const detailData = await detailRes.json();
            return {
              ...movie,
              Poster:
                detailData.Poster !== "N/A"
                  ? detailData.Poster
                  : "https://via.placeholder.com/300x450?text=No+Image",
            };
          }
          return movie;
        }),
      );

     if (append) {
       setMovies((prev) => [...prev, ...fixedResults]);
     } else {
       setMovies(fixedResults);
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
