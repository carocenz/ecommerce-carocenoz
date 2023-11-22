import { createContext, useState } from "react";
import { items } from "../utils/items";

export const Context = createContext(null);

const CartContext = ({ children }) => {
  const allCategories = [
    ...items.vehicles,
    ...items.electronics,
    ...items.games,
  ];

  const [itemSelected, setItemSelected] = useState(null);

  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const itemExists = cart.find((elem) => elem?.id == item.id);
    if (itemExists && itemExists.id) {
      const newCart = [...cart];
      newCart.map((elem) => {
        if (elem.id === itemExists.id) {
          elem.quantity += quantity;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, { id: item.id, quantity, meta: item }]);
    }
  };

  const incrementCart = (id) => {
    const itemExists = cart.find((elem) => elem?.id == id);
    if (itemExists && itemExists.id) {
      const newCart = [...cart];
      newCart.map((elem) => {
        if (elem.id === itemExists.id) {
          elem.quantity += 1;
        }
      });
      setCart(newCart);
    }
  };

  const decrementCart = (id) => {
    const itemExists = cart.find((elem) => elem?.id == id);
    if (itemExists.quantity == 1) return;
    if (itemExists && itemExists.id) {
      const newCart = [...cart];
      newCart.map((elem) => {
        if (elem.id === itemExists.id) {
          elem.quantity -= 1;
        }
      });
      setCart(newCart);
    }
  };

  const viewUniqueItem = (id) => {
    const oneItem = allCategories.find((elem) => elem.id === id);
    setItemSelected(oneItem);
  };

  return (
    <Context.Provider
      value={{
        itemSelected,
        viewUniqueItem,
        addToCart,
        cart,
        incrementCart,
        decrementCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CartContext;
