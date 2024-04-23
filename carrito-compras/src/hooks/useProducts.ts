import { useEffect, useState } from "react";
import fetchProducts from "../services/products";
import { ListOfProducts } from "../types";

const useProducts = () => {
  const [products, setProducts] = useState<ListOfProducts>([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return { products };
};

export default useProducts;
