import Header from "./components/Header";
import Movies from "./components/Movies";
import "./App.css";
import useMovies from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();

  return (
    <>
      <Header />
      <Movies movies={movies} />
    </>
  );
}

export default App;
