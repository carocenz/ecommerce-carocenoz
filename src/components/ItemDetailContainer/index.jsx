import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/CartContext";
import Description from "./Description";
import ItemQuantitySelector from "./ItemQuantitySelector";

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
          <Description> {itemSelected.description} </Description>
        </div>
        <ItemQuantitySelector selected={itemSelected} />
      </div>
    );
  }

  return <div> This product doesnt exists</div>;
};

export default ItemDetailContainer;
