import { useEffect, useState } from "react";
import fetchProducts from "../services/products";
import { ListOfProducts } from "../types";

const useProducts = () => {
  const [products, setProducts] = useState<ListOfProducts>([]);
  const [limit, setLimit] = useState(5);

  const handleLimit = () => {
    setLimit((prevLimit) => prevLimit + 5);
  };

  useEffect(() => {
    fetchProducts(limit)
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [limit]);

  return { products, handleLimit };
};

export default useProducts;
