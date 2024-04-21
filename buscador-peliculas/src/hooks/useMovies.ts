import { useEffect, useState } from "react";
import type { ListOfMovies, MovieFromApi } from "../types";

const API_KEY = "75597ee4";

const useMovies = () => {
  const [movies, setMovies] = useState<ListOfMovies>([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=Avengers`)
      .then((res) => {
        if (!res.ok) throw new Error("fetch error");
        return res.json();
      })
      .then((data) => {
        const mappedMovies = data.Search.map((movie: MovieFromApi) => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          img: movie.Poster,
        }));
        setMovies(mappedMovies);
      })
      .catch((err) => console.error(err));
  }, []);

  return { movies };
};

export default useMovies;
