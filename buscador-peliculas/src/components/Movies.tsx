import { ListOfMovies } from "../types";
import Movie from "./Movie";

interface Props {
  movies: ListOfMovies;
}

const Movies: React.FC<Props> = ({ movies }) => {
  const hasMovies = movies.length === 0 ? false : true;
  return (
    <>
      {hasMovies && (
        <ul className="movies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              img={movie.img}
              year={movie.year}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
