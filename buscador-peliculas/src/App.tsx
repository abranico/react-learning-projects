import Header from "./components/Header";
import Movies from "./components/Movies";
import useMovies from "./hooks/useMovies";
import "./App.css";

function App() {
  const { movies, apiError, loading, getMovies } = useMovies();

  return (
    <>
      <Header onSearch={getMovies} />

      {loading && <p style={{ textAlign: "center" }}>Cargando...</p>}

      {!apiError && <Movies movies={movies} />}

      {apiError && <p style={{ textAlign: "center" }}>{`${apiError}`}</p>}
    </>
  );
}

export default App;
