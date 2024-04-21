import { useState } from "react";
import type { ListOfMovies, MovieFromApi } from "../types";

const API_KEY = "75597ee4";

const useMovies = () => {
  const [movies, setMovies] = useState<ListOfMovies>([]);
  const [apiError, setApiError] = useState<boolean | string>(false);

  const getMovies = (keyword: string) => {
    setApiError(false);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${keyword}`)
      .then((res) => {
        if (!res.ok) throw new Error("fetch error");
        return res.json();
      })
      .then((data) => {
        if (data.Error === "Movie not found!")
          return setApiError("Pelicula no encontrada");
        const mappedMovies = data.Search.map((movie: MovieFromApi) => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          img: movie.Poster,
        }));
        setMovies(mappedMovies);
      })
      .catch((err) => {
        console.error(err);
        setApiError(err);
      });
  };

  return { movies, apiError, getMovies };
};

export default useMovies;
