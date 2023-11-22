import { useContext } from "react";
import { Context } from "../../../context/CartContext";

const AddItemButton = ({ item, quantity, isCheckout }) => {
  const { addToCart } = useContext(Context);
  const handleAction = () => {
    if (isCheckout) return;
    addToCart(item, quantity);
  };
  return (
    <button
      onClick={handleAction}
      class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {isCheckout ? "Pagar" : "Agregar al carrito"}
    </button>
  );
};

export default AddItemButton;
