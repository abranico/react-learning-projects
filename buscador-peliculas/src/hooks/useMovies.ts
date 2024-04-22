import { useState, useRef } from "react";
import { searchMovies } from "../services/movies";
import type { ListOfMovies } from "../types";

const useMovies = () => {
  const [movies, setMovies] = useState<ListOfMovies>([]);
  const [apiError, setApiError] = useState<boolean | string>(false);
  const [loading, setLoading] = useState(false);
  const prevSearch = useRef("");

  const getMovies = async (search: string) => {
    if (search === prevSearch.current) return;

    try {
      setLoading(true);
      setApiError(false);
      const newMovies = await searchMovies(search);
      prevSearch.current = search;
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
