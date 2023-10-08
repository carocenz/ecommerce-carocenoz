import { FaCartArrowDown } from "react-icons/fa6";

const CartWidget = () => {
    const cartItemLength = 3;
    return (
        <div className="grid grid-cols-2 gap-x-2 items-center p-2 rounded-md bg-white bg-opacity-30 cursor-pointer">
            <FaCartArrowDown color="white" />
            <p className="text-white">{cartItemLength}</p>
        </div>
    );
};

export default CartWidget;
