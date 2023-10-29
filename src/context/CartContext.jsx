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

  const viewUniqueItem = (id) => {
    const oneItem = allCategories.find((elem) => elem.id === id);
    setItemSelected(oneItem);
  };

  return (
    <Context.Provider value={{ itemSelected, viewUniqueItem }}>
      {children}
    </Context.Provider>
  );
};

export default CartContext;
