import { ListOfMovies } from "../types";
import Movie from "./Movie";

interface Props {
  movies: ListOfMovies;
}

const Movies: React.FC<Props> = ({ movies }) => {
  const hasMovies = movies.length > 0 ? true : false;
  return (
    <main>
      {hasMovies ? (
        <ul>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              img={movie.img}
              year={movie.year}
            />
          ))}
        </ul>
      ) : (
        <p>Pelicula no encontrada</p>
      )}
    </main>
  );
};

export default Movies;
