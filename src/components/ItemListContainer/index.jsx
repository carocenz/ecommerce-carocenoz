import { useNavigate, useParams } from "react-router-dom";
import { items } from "../../utils/items";
import { useContext } from "react";
import { Context } from "../../context/CartContext";
import ItemCard from "../ItemCard/index";

const ItemListContainer = ({ greetings }) => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const itemCategories = items;

  const allCategories = [
    ...itemCategories.vehicles,
    ...itemCategories.electronics,
    ...itemCategories.games,
  ];

  const { viewUniqueItem } = useContext(Context);

  const viewItem = (id) => {
    viewUniqueItem(id);
    navigate(`/item/${id}`);
  };

  if (categoryId && itemCategories[categoryId]) {
    return (
      <div class="grid grid-cols-3 gap-4 p-6">
        {itemCategories[categoryId].map((item) => {
          return <ItemCard key={item.id} item={item} onSelectItem={viewItem} />;
        })}
      </div>
    );
  }

  return (
    <div class="grid grid-cols-3 gap-4 p-6">
      {allCategories.map((item) => {
        return <ItemCard key={item.id} item={item} onSelectItem={viewItem} />;
      })}
    </div>
  );
};

export default ItemListContainer;
