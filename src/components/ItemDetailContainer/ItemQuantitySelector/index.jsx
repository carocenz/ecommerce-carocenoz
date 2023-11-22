import { useContext, useState } from "react";
import AddItemButton from "../AddItemButton";
import { Context } from "../../../context/CartContext";

const ItemQuantitySelector = ({
  selected,
  initialValue = null,
  isCheckout = null,
}) => {
  const [itemQuantity, setItemQuantity] = useState(initialValue ?? 1);
  const { incrementCart, decrementCart } = useContext(Context);
  const handleQuantity = ({ target: { value } }) => setItemQuantity(value);

  const increment = () => {
    setItemQuantity((prev) => parseInt(prev, 10) + 1);
    if (isCheckout) incrementCart(selected.id);
  };

  const decrement = () => {
    if (itemQuantity === 1) return;

    setItemQuantity((prev) => parseInt(prev, 10) - 1);
    if (isCheckout) decrementCart(selected.id);
  };

  return (
    <div class="grid justify-center">
      <div class="flex flex-col gap-4">
        <label
          class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
          for="quantity"
        >
          Cantidad
        </label>
        <div class="flex items-center gap-4">
          <button
            onClick={decrement}
            class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4"
            >
              <path d="M5 12h14"></path>
            </svg>
            <span class="sr-only"></span>
          </button>
          <input
            class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-20 text-center"
            id="quantity"
            type="number"
            value={itemQuantity}
            onChange={handleQuantity}
          />
          <button
            onClick={increment}
            class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
          </button>
        </div>
      </div>
      <AddItemButton quantity={itemQuantity} item={selected} isCheckout={isCheckout} />
    </div>
  );
};

export default ItemQuantitySelector;
