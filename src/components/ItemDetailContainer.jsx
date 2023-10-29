import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { itemSelected } = useContext(Context);

  const equalId = itemSelected?.id === parseInt(id, 10);
  if (id && equalId) {
    return (
      <div class="rounded overflow-hidden shadow-lg p-6 bg-white">
        <img
          class="w-full h-48 object-cover"
          src={itemSelected.path}
          alt="itemSelected image 1"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2"> {itemSelected.name} </div>
          <p class="text-gray-700 text-base"> {itemSelected.description} </p>
        </div>
        <button
          onClick={() => console.log(itemSelected.id)}
          class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Agregar al carrito
        </button>
      </div>
    );
  }

  return(
    <div> This product doesnt exists</div>
  )
};

export default ItemDetailContainer;
