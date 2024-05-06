import { useContext } from "react";
import { itemCart } from "../types";
import { CartContext } from "../context/cart";

const CartItem = ({ id, image, title, price, quantity }: itemCart) => {
  const { addItem, removeItemIfQuantity } = useContext(CartContext);
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <button onClick={() => removeItemIfQuantity(id)}>-</button>
        <small>Qty: {quantity}</small>
        <button
          onClick={() =>
            addItem({
              id,
              title,
              price,
              image,
              quantity,
            })
          }
        >
          +
        </button>
      </footer>
    </li>
  );
};

export default CartItem;
