import { useMovies } from "../context/MovieContext";

export default function MovieDetails({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useMovies();
  const fav = isFavorite(movie.imdbID);

  const poster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className="details">
      <img src={poster} alt={movie.Title} />
      <div>
        <h2>{movie.Title}</h2>
        <p>
          <b>Year:</b> {movie.Year}
        </p>
        <p>
          <b>Genre:</b> {movie.Genre}
        </p>
        <p>
          <b>Runtime:</b> {movie.Runtime}
        </p>
        <p>
          <b>Director:</b> {movie.Director}
        </p>
        <p>
          <b>Actors:</b> {movie.Actors}
        </p>
        <p>
          <b>Plot:</b> {movie.Plot}
        </p>
        <p>
          <b>IMDb:</b> {movie.imdbRating}
        </p>
        {fav ? (
          <button onClick={() => removeFavorite(movie.imdbID)}>
            Remove Favorite
          </button>
        ) : (
          <button onClick={() => addFavorite(movie)}>Add Favorite</button>
        )}
      </div>
    </div>
  );
}
