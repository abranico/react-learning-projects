import type { MovieFromApi, ListOfMovies } from "./types";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";
import "./App.css";

const API_KEY = "75597ee4";

function App() {
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

  return (
    <>
      <Header />
      <Movies movies={movies} />
    </>
  );
}

export default App;
