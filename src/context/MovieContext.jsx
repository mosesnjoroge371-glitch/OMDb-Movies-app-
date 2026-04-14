import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [continueWatching, setContinueWatching] = useState(() => {
    try {
      const saved = localStorage.getItem("continueWatching");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [myList, setMyList] = useState(() => {
    try {
      const saved = localStorage.getItem("myList");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [downloads, setDownloads] = useState(() => {
    try {
      const saved = localStorage.getItem("downloads");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("continueWatching", JSON.stringify(continueWatching));
  }, [continueWatching]);

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  useEffect(() => {
    localStorage.setItem("downloads", JSON.stringify(downloads));
  }, [downloads]);

  const addFavorite = (movie) => {
    if (!favorites.find((m) => m.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((m) => m.imdbID !== id));
  };

  const isFavorite = (id) => favorites.some((m) => m.imdbID === id);

  const addToMyList = (movie) => {
    if (!myList.find((m) => m.imdbID === movie.imdbID)) {
      setMyList([...myList, movie]);
    }
  };

  const removeFromMyList = (id) => {
    setMyList(myList.filter((m) => m.imdbID !== id));
  };

  const addDownload = (movie) => {
    if (!downloads.find((m) => m.imdbID === movie.imdbID)) {
      setDownloads([...downloads, movie]);
    }
  };

  const removeDownload = (id) => {
    setDownloads(downloads.filter((m) => m.imdbID !== id));
  };

  const addToContinueWatching = (movie, progress = 0) => {
    setContinueWatching((prev) => {
      const existing = prev.find((m) => m.imdbID === movie.imdbID);
      if (existing) {
        return prev.map((m) =>
          m.imdbID === movie.imdbID ? { ...m, progress } : m,
        );
      }
      return [...prev, { ...movie, progress }];
    });
  };

  return (
    <MovieContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        continueWatching,
        addToContinueWatching,
        myList,
        addToMyList,
        removeFromMyList,
        downloads,
        addDownload,
        removeDownload,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export const useMovies = () => useContext(MovieContext);
