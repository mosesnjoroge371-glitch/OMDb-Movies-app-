import { Link } from "react-router-dom";
import { useMovies } from "../context/MovieContext";

export default function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useMovies();
  const fav = isFavorite(movie.imdbID);

  const poster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className="card">
      <Link to={`/movie/${movie.imdbID}`}>
        <img src={poster} alt={movie.Title} />
      </Link>
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      {fav ? (
        <button onClick={() => removeFavorite(movie.imdbID)}>Remove</button>
      ) : (
        <button onClick={() => addFavorite(movie)}>Favorite</button>
      )}
    </div>
  );
}
