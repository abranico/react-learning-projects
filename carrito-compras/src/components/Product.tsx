import type { Product } from "../types";

type Props = Product;

const Product: React.FC<Props> = ({
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const newDescription =
    description.length > 50
      ? description.substring(0, 50) + "..."
      : description;

  const newTitle = title.length > 40 ? title.substring(0, 40) + "..." : title;

  return (
    <li className="product__container">
      <div className="product__image-container">
        <img className="product__image" src={image} alt={title} />
      </div>

      <h3 className="product__title">{newTitle}</h3>
      <h4 className="product__price">$ {price}</h4>
      <p className="product__category">{category}</p>
      <p className="product__description">{newDescription}</p>
      <div className="product__actions">
        <button>Agregar al carrito</button>
      </div>
    </li>
  );
};

export default Product;
