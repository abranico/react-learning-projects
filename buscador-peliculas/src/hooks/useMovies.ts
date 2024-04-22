import { useState } from "react";
import { searchMovies } from "../services/movies";
import type { ListOfMovies } from "../types";

const useMovies = () => {
  const [movies, setMovies] = useState<ListOfMovies>([]);
  const [apiError, setApiError] = useState<boolean | string>(false);
  const [loading, setLoading] = useState(false);

  const getMovies = async (keyword: string) => {
    try {
      setLoading(true);
      setApiError(false);
      const newMovies = await searchMovies(keyword);
      setMovies(newMovies);
    } catch (err: unknown) {
      if (!(err instanceof Error)) return;
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { movies, apiError, loading, getMovies };
};

export default useMovies;
