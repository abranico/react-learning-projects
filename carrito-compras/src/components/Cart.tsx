import "./Cart.css";

import { useContext } from "react";
import { ClearCartIcon } from "./Icons";
import CartItem from "./CartItem";
import { CartContext } from "../context/cart";

const Cart = () => {
  const { resetCart, cart } = useContext(CartContext);
  console.log(cart);
  return (
    <aside className="cart">
      <ul>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}

        {cart.length > 0 ? (
          <li style={{ border: "none" }}>
            <button onClick={resetCart} title="Resetear carrito">
              <ClearCartIcon />
            </button>
          </li>
        ) : (
          "No hay productos en el carrito"
        )}
      </ul>
    </aside>
  );
};

export default Cart;
