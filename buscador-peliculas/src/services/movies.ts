import { type MovieFromApi } from "../types";

const API_KEY = "75597ee4";

export const searchMovies = (search: string) => {
  return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    .then((res) => {
      if (!res.ok) throw new Error("Error buscando peliculas");
      return res.json();
    })
    .then((data) => {
      if (data.Error === "Movie not found!")
        throw new Error("Pelicula no encontrada");

      const mappedMovies = data.Search.map((movie: MovieFromApi) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        img: movie.Poster,
      }));

      return mappedMovies;
    })
    .catch((err) => {
      throw err;
    });
};
