import { useEffect, useState } from "react";
import fetchProducts from "../services/products";
import { Category, ListOfProducts } from "../types";

const useProducts = () => {
  const [products, setProducts] = useState<ListOfProducts>([]);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | string>(false);

  const handleLimit = () => {
    setLimit((prevLimit) => prevLimit + 5);
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchProducts(limit)
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  }, [limit]);

  return { products, error, loading, handleLimit };
};

export default useProducts;
