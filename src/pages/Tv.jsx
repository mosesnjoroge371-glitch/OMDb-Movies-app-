import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { searchByType } from "../utils/api";
import MovieCard from "../components/MovieCard";

export default function Tv() {
  const navigate = useNavigate();
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
      <div className="page-header">
        <button
          className="back-btn"
          onClick={() => navigate("/")}
          aria-label="Go to home"
          title="Go to home"
        >
          <FaArrowLeft />
        </button>
        <h1>TV Shows</h1>
      </div>
      <div className="grid">
        <h2>TV Shows</h2>

        {loading && <p>Loading TV shows...</p>}

        {!loading && shows.length === 0 && <p>No TV shows found.</p>}

        <div className="grid">
          {shows.map((show) => (
            <MovieCard key={show.imdbID} movie={show} />
          ))}
        </div>
      </div>
    </div>
  );
}
