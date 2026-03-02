import { useMovies } from "../context/MovieContext";

export default function ContinueWatching() {
  // Provide an empty array as a fallback if 'continueWatching' is undefined or null
  const { continueWatching = [] } = useMovies();

  return (
    <div>
      {continueWatching.length === 0 ? (
        <p>No active watching progress.</p>
      ) : (
        continueWatching.map((item) => (
          <div key={item.imdbID}>
            <h4>{item.Title}</h4>
            <progress value={item.progress} max="100"></progress>
          </div>
        ))
      )}
    </div>
  );
}
