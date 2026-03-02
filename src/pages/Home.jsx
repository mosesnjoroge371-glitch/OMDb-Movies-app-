import { useEffect, useState, useRef, useCallback } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import CategoryBar from "../components/CategoryBar";
import { searchByKeyword, getMovieById } from "../utils/api";

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

  const [query, setQuery] = useState(randomStarter);
  const [page, setPage] = useState(1);
  const observer = useRef();

  const fetchMovies = async (title, pageNum = 1, append = false) => {
    try {
      setLoading(true);

      const data = await searchByKeyword(title, pageNum);

      let results = data.Search || [];

      // 🔥 Fix missing posters
      const fixedResults = await Promise.all(
        results.map(async (movie) => {
          if (movie.Poster === "N/A") {
            const detailData = await getMovieById(movie.imdbID);
            return {
              ...movie,
              Poster:
                detailData.Poster && detailData.Poster !== "N/A"
                  ? detailData.Poster
                  : "https://via.placeholder.com/300x450?text=No+Image",
            };
          }
          return movie;
        }),
      );

      if (append) {
        setMovies((prev) => {
          // deduplicate: only add movies not already in the list
          const existingIds = new Set(prev.map((m) => m.imdbID));
          const newMovies = fixedResults.filter(
            (m) => !existingIds.has(m.imdbID),
          );
          return [...prev, ...newMovies];
        });
      } else {
        setMovies(fixedResults);
      }
    } catch (err) {
      if (!append) setMovies([]);
      console.error(err);
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
