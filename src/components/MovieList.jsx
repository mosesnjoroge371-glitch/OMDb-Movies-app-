import MovieCard from "./MovieCard";

export default function MovieList({ movies, loading }) {
  if (loading) return <p>Loading movies...</p>;
  if (!movies?.length) return <p>No movies found</p>;

  return (
    <section className="grid">
      {movies.map((m) => (
        <MovieCard key={m.imdbID} movie={m} />
      ))}
    </section>
  );
}
