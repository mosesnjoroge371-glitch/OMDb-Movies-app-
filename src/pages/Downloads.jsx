import { useMovies } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

export default function Downloads() {
  const { downloads } = useMovies();

  return (
    <div className="grid">
      {downloads.length === 0 ? (
        <p>No downloads yet.</p>
      ) : (
        downloads.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      )}
    </div>
  );
}
