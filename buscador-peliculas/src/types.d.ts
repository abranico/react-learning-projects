export interface MovieFromApi {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface Movie {
  id: string;
  title: string;
  year: string;
  img: string;
}

export type ListOfMovies = Array<Movie>;
