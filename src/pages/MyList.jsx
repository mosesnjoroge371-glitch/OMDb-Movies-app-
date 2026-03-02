import { useMovies } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

export default function MyList() {
  const { myList = [] } = useMovies();

  return (
    <div className="page">
      <h2 className="page-title">My List</h2>

      {myList.length === 0 ? (
        <div className="empty-state">
          <p>You haven't added anything to your list yet.</p>
        </div>
      ) : (
        <div className="grid">
          {myList.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
