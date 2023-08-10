"use client";
import { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import { API_URL } from "@/redux/features/api/apiSlice";
import toast, { Toaster } from "react-hot-toast";
// redux
import { useDispatch } from "react-redux";
import { setCartItems } from "@/redux/features/cart/cartSlice";

const CartCard = ({ cartData }) => {
  const dispatch = useDispatch();
  const [cart_data, setCart_data] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (op) => {
    if (op === "+") {
      setQuantity((prev) => prev + 1);
    }
    if (op === "-") {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };

  // cart item remove
  const handleRemoveCartItem = (id) => {
    if (confirm("Delete cart item?")) {
      const cartItems = JSON.parse(localStorage.getItem("cart_items"));
      const updatedItems = cartItems.filter((item) => item.id !== id);
      localStorage.setItem("cart_items", JSON.stringify(updatedItems));
      dispatch(setCartItems());
      toast.success("Item removed!");
      setCart_data("");
    }
  };

  useEffect(() => {
    setCart_data(cartData);
  }, [cartData]);

  if (!cart_data)
    return (
      <div className="alert alert-warning mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>No cart item found!</span>
      </div>
    );

  return (
    <div className="flex justify-between items-center border-b mb-2">
      <Toaster position="bottom-center" />
      <div className="col-span-4 flex gap-3 items-center p-3">
        <img
          className="min-w-[100px] md:min-w-[160px] lg:min-w-[230px] max-h-[100px] object-contain"
          src={cart_data?.image}
          alt="Product image"
        />
        <div>
          <h4 className="text-sm md:text-base font-semibold">
            {cart_data?.title}
          </h4>
          <p className="text-xs md:text-sm mt-1">${cart_data?.price}.00</p>
        </div>
      </div>

      <div className="min-w-[180px] md:min-w-[250px] lg:min-w-[350px] flex items-center justify-between">
        <div className=" mt-2 w-[80px] md:w-[120px] h-fit border border-gray-500 flex items-center justify-between">
          <button
            // disabled={quantity == 1 ? true : false}
            disabled
            className="p-3 text-xs md:text-sm disabled:text-gray-400"
            onClick={() => handleQuantity("-")}
          >
            <AiOutlineMinus />
          </button>
          <span>{cart_data?.quantity || 0}</span>
          <button
            disabled
            className="p-3 text-sm disabled:text-gray-400"
            onClick={() => handleQuantity("+")}
          >
            <AiOutlinePlus />
          </button>
        </div>

        <div className="flex gap-3 md:gap-5">
          <div className="text-sm md:text-base font-semibold">
            ${Number(cart_data?.price) * Number(cart_data?.quantity)}
          </div>
          <button
            onClick={() => handleRemoveCartItem(cart_data?.cart_id)}
            className="w-20px text-xl hover:text-red-500"
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
