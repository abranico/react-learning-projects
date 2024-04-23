import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import useProducts from "./hooks/useProducts";

function App() {
  const { products } = useProducts();
  return (
    <>
      <Header />
      <main>
        <Products products={products} />
      </main>
    </>
  );
}

export default App;
