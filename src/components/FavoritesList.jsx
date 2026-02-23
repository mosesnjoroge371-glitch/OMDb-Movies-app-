import { useMovies } from "../context/MovieContext";
import MovieCard from "./MovieCard";

export default function FavoritesList() {
  const { favorites } = useMovies();

  if (!favorites.length) return <p>No favorites added</p>;

  return (
    <section className="grid">
      {favorites.map((m) => (
        <MovieCard key={m.imdbID} movie={m} />
      ))}
    </section>
  );
}
