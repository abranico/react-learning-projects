import "./App.css";
import "./Products.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import useProducts from "./hooks/useProducts";

function App() {
  const { products, handleLimit } = useProducts();
  return (
    <>
      <Header />
      <main className="container">
        <Products products={products} />
      </main>
      <Footer handleLimit={handleLimit} />
    </>
  );
}

export default App;
