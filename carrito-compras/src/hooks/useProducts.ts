import { useEffect, useState } from "react";
import fetchProducts from "../services/products";
import { ListOfProducts } from "../types";

const useProducts = () => {
  const [products, setProducts] = useState<ListOfProducts>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | string>(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { products, error, loading };
};

export default useProducts;
