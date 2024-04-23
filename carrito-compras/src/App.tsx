import "./App.css";
import "./Products.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import useProducts from "./hooks/useProducts";

function App() {
  const { products, error, loading, handleLimit } = useProducts();
  return (
    <>
      <Header />
      <main className="container">
        {error && <p>{error}</p>}
        {loading && (
          <article aria-busy="true" style={{ height: "100%" }}></article>
        )}
        {!loading && <Products products={products} />}
      </main>
      {!loading && !error && <Footer handleLimit={handleLimit} />}
    </>
  );
}

export default App;
