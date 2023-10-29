const ItemCard = ({ item, onSelectItem }) => {
  const viewProduct = (id) => {
    onSelectItem(id);
  };

  return (
    <div class="rounded overflow-hidden shadow-lg p-6 bg-white">
      <img
        class="w-full h-48 object-cover"
        src={item.path}
        alt="Item image 1"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2"> {item.name} </div>
        <p class="text-gray-700 text-base"> {item.description} </p>
      </div>
      <button
        onClick={() => viewProduct(item.id)}
        class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ver producto
      </button>
    </div>
  );
};

export default ItemCard;
