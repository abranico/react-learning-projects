const fetchProducts = (limit: number) => {
  return fetch(`https://fakestoreapi.com/products?limit=${limit}`)
    .then((res) => {
      if (!res.ok) throw new Error("Error al buscar productos");
      return res.json();
    })
    .then((data) => data)
    .catch((err) => {
      throw err;
    });
};

export default fetchProducts;
