import type { ListOfProducts } from "../types";
import Product from "./Product";

interface Props {
  products: ListOfProducts;
}

const Products: React.FC<Props> = ({ products }) => {
  const hasProducts = products.length !== 0;

  return (
    <ul className="products__container">
      {hasProducts ? (
        products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={product.rating}
          />
        ))
      ) : (
        <li>No se encontraron productos</li>
      )}
    </ul>
  );
};

export default Products;
