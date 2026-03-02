import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import { getMovieById } from "../utils/api";

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    let mounted = true;
    getMovieById(id)
      .then((data) => {
        if (mounted) setMovie(data);
      })
      .catch((err) => console.error(err));
    return () => (mounted = false);
  }, [id]);

  if (!movie) return <p>Loading movie...</p>;
  return <MovieDetails movie={movie} />;
}
