import { useContext, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { Context } from "../../context/CartContext";
import ItemQuantitySelector from "../ItemDetailContainer/ItemQuantitySelector";

const CartWidget = () => {
  const { cart } = useContext(Context);

  const [showDetail, setShowDetail] = useState(false);

  const handleDetailCart = (e) => {
    e.stopPropagation();
    setShowDetail(!showDetail);
  };
  return (
    <>
      <div
        onClick={handleDetailCart}
        className="grid grid-cols-2 gap-x-2 items-center p-2 rounded-md bg-white bg-opacity-30 cursor-pointer"
      >
        <FaCartArrowDown color="white" />
        <p className="text-white">{cart.length}</p>
      </div>
      {showDetail && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 50,
            backgroundColor: "#3333337a",
          }}
        >
          <div
            style={{
              position: "absolute",
              display: "grid",
              top: 0,
              right: 0,
              padding: "10px",
              width: "400px",
              height: "100%",
              zIndex: 100,
              backgroundColor: "white",
              border: "1px solid #333",
            }}
          >
            <button
              style={{ alignSelf: "baseline", justifySelf: "right" }}
              onClick={() => setShowDetail(false)}
            >
              {" "}
              X{" "}
            </button>
            <div
              style={{
                maxHeight: "600px",
                width: "100%",
                overflowY: "scroll",
                display: "grid",
                gridRowGap: "1rem",
              }}
            >
              {cart.map((item) => {
                return (
                  <div>
                    <img src={item.meta.path} />
                    <h3> {item.meta.name} </h3>
                    <ItemQuantitySelector
                      isCheckout
                      initialValue={item.quantity}
                      selected={item.meta}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartWidget;
