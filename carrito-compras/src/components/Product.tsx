import { useContext } from "react";
import type { Product } from "../types";
import { CartContext } from "../context/cart";

type Props = Product;

const Product: React.FC<Props> = ({
  id,
  title,
  price,
  description,
  category,
  image,
}) => {
  const { cart, addItem, removeItem } = useContext(CartContext);
  const inCart = cart.find((item) => item.id === id) ? true : false;

  const handleClick = (): void => {
    if (inCart) {
      removeItem(id);
    } else {
      addItem({
        id,
        title,
        price,
        image,
        quantity: 1,
      });
    }
  };

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
        <button
          style={{ backgroundColor: inCart ? "red" : "" }}
          onClick={handleClick}
        >
          {inCart ? "Sacar del carrito" : "Agregar al carrito"}
        </button>
      </div>
    </li>
  );
};

export default Product;
