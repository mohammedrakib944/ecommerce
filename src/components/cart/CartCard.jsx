"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import { API_URL } from "@/redux/features/api/apiSlice";
import toast, { Toaster } from "react-hot-toast";
// redux
import { useDispatch } from "react-redux";
import { setCartItems } from "@/redux/features/cart/cartSlice";

const CartCard = ({ cartData }) => {
  const dispatch = useDispatch();
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
    }
  };

  return (
    <div className="flex justify-between items-center border-b mb-2">
      <Toaster position="bottom-center" />
      <div className="col-span-4 flex gap-3 items-center p-3">
        <img
          className="min-w-[100px] md:min-w-[160px] lg:min-w-[230px] max-h-[100px] object-contain"
          src={cartData?.image}
          alt="Product image"
        />
        <div>
          <h4 className="text-sm md:text-base font-semibold">
            {cartData?.title}
          </h4>
          <p className="text-xs md:text-sm mt-1">${cartData?.price}.00</p>
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
          <span>{cartData?.quantity}</span>
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
            ${Number(cartData?.price) * Number(cartData?.quantity)}
          </div>
          <button
            onClick={() => handleRemoveCartItem(cartData?.cart_id)}
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
