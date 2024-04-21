import Header from "./components/Header";
import Movies from "./components/Movies";
import useMovies from "./hooks/useMovies";
import "./App.css";

function App() {
  const { movies, apiError, getMovies } = useMovies();

  return (
    <>
      <Header onSearch={getMovies} />
      {!apiError && <Movies movies={movies} />}

      {apiError && (
        <p style={{ color: "brown", textAlign: "center" }}>{`${apiError}`}</p>
      )}
    </>
  );
}

export default App;
