import { ReactNode, createContext, useState } from "react";
import type { itemCart } from "../types";

interface CartContextProps {
  addItem: (product: itemCart) => void;
  removeItem: (id: number) => void;
  removeItemIfQuantity: (id: number) => void;
  resetCart: () => void;
  cart: Array<itemCart>;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextProps>({
  addItem: () => {},
  removeItem: () => {},
  removeItemIfQuantity: () => {},
  resetCart: () => {},
  cart: [],
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Array<itemCart>>([]);
  const addItem = (product: itemCart): void => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].quantity += 1;
      setCart(newCart);
    } else {
      setCart((prevCart) => prevCart.concat(product));
    }
  };
  const removeItem = (id: number): void => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  const removeItemIfQuantity = (id: number): void => {
    const index = cart.findIndex((item) => item.id === id);
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      setCart(newCart);
    } else {
      removeItem(id);
    }
  };

  const resetCart = (): void => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, removeItemIfQuantity, resetCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
