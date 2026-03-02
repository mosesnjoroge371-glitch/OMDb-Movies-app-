import { useState } from "react";

export default function Search() {
  // load key from Vite environment variables (.env)
  const myKey = import.meta.env.VITE_OMDB_KEY;

  if (!myKey) {
    console.error(
      "VITE_OMDB_KEY is not defined. Add your OMDb API key to .env",
    );
  }

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("searchHistory")) || [],
  );
  const [loading, setLoading] = useState(false);

  const searchMovies = async (searchTerm) => {
    if (!searchTerm) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${myKey}&s=${encodeURIComponent(
          searchTerm,
        )}`,
      );
      const data = await res.json();

      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }

      // Save to history
      const updatedHistory = [
        searchTerm,
        ...history.filter((item) => item !== searchTerm),
      ].slice(0, 8);

      setHistory(updatedHistory);
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(query);
  };

  const clearHistory = () => {
    localStorage.removeItem("searchHistory");
    setHistory([]);
  };

  if (!myKey) {
    return (
      <div className="search-page">
        <h1>Search Movies</h1>
        <p className="error">
          API key missing – please set <code>VITE_OMDB_KEY</code> in your
          <code>.env</code> file.
        </p>
      </div>
    );
  }

  return (
    <div className="search-page">
      <h1>Search Movies</h1>

      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search movies, series, anime..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {history.length > 0 && (
        <div className="history-section">
          <h3>Recent Searches</h3>
          <div className="history-list">
            {history.map((item, index) => (
              <span
                key={index}
                onClick={() => searchMovies(item)}
                className="history-item"
              >
                {item}
              </span>
            ))}
          </div>
          <button className="clear-btn" onClick={clearHistory}>
            Clear History
          </button>
        </div>
      )}

      {loading && <p>Loading...</p>}

      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={movie.Title}
            />
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
