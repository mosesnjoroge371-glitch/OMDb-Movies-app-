const KEY = import.meta.env.VITE_OMDB_KEY;

if (!KEY) {
  console.error("VITE_OMDB_KEY is not defined. Add your OMDb API key to .env");
}

export async function searchByKeyword(keyword, page = 1) {
  if (!KEY) throw new Error("Missing OMDb API key (VITE_OMDB_KEY)");
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${KEY}&s=${encodeURIComponent(
      keyword,
    )}&page=${page}`,
  );
  return res.json();
}

// type parameter can be "movie", "series" or "episode" (OMDb supports)
export async function searchByType(keyword, type, page = 1) {
  if (!KEY) throw new Error("Missing OMDb API key (VITE_OMDB_KEY)");
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${KEY}&s=${encodeURIComponent(
      keyword,
    )}&type=${encodeURIComponent(type)}&page=${page}`,
  );
  return res.json();
}

export async function getMovieById(id) {
  if (!KEY) throw new Error("Missing OMDb API key (VITE_OMDB_KEY)");
  const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&i=${id}`);
  return res.json();
}
