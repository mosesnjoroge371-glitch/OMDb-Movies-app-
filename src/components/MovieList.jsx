import MovieCard from "./MovieCard";

export default function MovieList({ movies, loading, lastMovieRef }) {
  if (!movies?.length && !loading) return <p>No movies found</p>;

  return (
    <section className="grid">
      {movies.map((m, i) => {
        if (movies.length === i + 1) {
          return (
            <div ref={lastMovieRef} key={m.imdbID}>
              <MovieCard movie={m} />
            </div>
          );
        }

        return <MovieCard key={m.imdbID} movie={m} />;
      })}

      {loading && <p>Loading more movies...</p>}
    </section>
  );
}
