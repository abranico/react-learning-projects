import { useContext } from "react";
import "./App.css";
import "./Products.css";
import Header from "./components/Header";
import Products from "./components/Products";
import useProducts from "./hooks/useProducts";
import { FiltersContext } from "./context/filters";
import { CartProvider } from "./context/cart";

function App() {
  const { products, error, loading } = useProducts();
  const { category } = useContext(FiltersContext)!;
  const fillteredProducts = products.filter((product) => {
    if (
      !category.electronics &&
      !category.jewelery &&
      !category.mens_clothing &&
      !category.womens_clothing
    )
      return product;
    return (
      (category.electronics && product.category === "electronics") ||
      (category.jewelery && product.category === "jewelery") ||
      (category.mens_clothing && product.category === "men's clothing") ||
      (category.womens_clothing && product.category === "women's clothing")
    );
  });

  return (
    <CartProvider>
      <Header />

      <main className="container">
        {error && <p>{error}</p>}
        {loading && (
          <article aria-busy="true" style={{ height: "100%" }}></article>
        )}
        {!loading && <Products products={fillteredProducts} />}
      </main>
    </CartProvider>
  );
}

export default App;
