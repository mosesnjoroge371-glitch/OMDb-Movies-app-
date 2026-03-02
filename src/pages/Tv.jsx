import { useEffect, useState } from "react";
import { searchByType } from "../utils/api";
import MovieCard from "../components/MovieCard";

export default function Tv() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchShows() {
      try {
        setLoading(true);

        // You can change the keyword to anything popular
        const data = await searchByType("Naruto", "series");

        if (data.Search) {
          setShows(data.Search);
        } else {
          setShows([]);
        }
      } catch (error) {
        console.error("Error fetching TV shows:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchShows();
  }, []);

  return (
    <div>
      <h2>TV Shows</h2>

      {loading && <p>Loading TV shows...</p>}

      {!loading && shows.length === 0 && <p>No TV shows found.</p>}

      <div className="grid">
        {shows.map((show) => (
          <MovieCard key={show.imdbID} movie={show} />
        ))}
      </div>
    </div>
  );
}
