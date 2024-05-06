import { useContext, useState } from "react";
import Filter from "./Filter";
import { CartContext } from "../context/cart";
import Cart from "./Cart";

const Header = () => {
  const { cart } = useContext(CartContext)!;
  const [toggleCart, setToggleCart] = useState(false);
  const handleClick = () => {
    setToggleCart(!toggleCart);
  };
  console.log(cart);
  return (
    <header className="container">
      <nav>
        <ul>
          <li>
            <strong>Carrito de Compras</strong>
          </li>
        </ul>
        <ul>
          <li>
            <Filter />
          </li>
        </ul>
        <ul>
          <li>
            <button
              onClick={handleClick}
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-shopping-cart"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>
              <span>{cart.length}</span>
            </button>
          </li>
        </ul>
        {toggleCart && <Cart />}
      </nav>
    </header>
  );
};

export default Header;
