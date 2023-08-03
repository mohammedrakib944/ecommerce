"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import { API_URL } from "@/redux/features/api/apiSlice";
import { useRemoveCartItemMutation } from "@/redux/features/cart/cartApi";
import toast, { Toaster } from "react-hot-toast";

const CartCard = ({ cartData }) => {
  const [quantity, setQuantity] = useState(1);
  const [removeCartItem, { isSuccess, error }] = useRemoveCartItemMutation();

  const handleQuantity = (op) => {
    if (op === "+") {
      setQuantity((prev) => prev + 1);
    }
    if (op === "-") {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };

  // cart item remove
  const handleRemoveCartItem = () => {
    if (!cartData) return;
    if (!confirm("Item remove from cart?")) return;
    removeCartItem(cartData._id);
  };

  // Success Error - message
  useEffect(() => {
    if (isSuccess) toast.success("Item removed!");

    if (error) {
      toast.error(error.data?.message);
    }
  }, [isSuccess, error]);

  useEffect(() => {
    if (cartData) {
      setQuantity(cartData.quantity);
    }
  }, [cartData]);

  return (
    <div className="flex justify-between items-center border-b mb-2">
      <Toaster position="bottom-center" />
      <div className="col-span-4 flex gap-3 items-center">
        <img
          className="w-[100px] md:w-[160px] lg:w-[230px]"
          src={`${API_URL}/images/products/${cartData?.product?.images[0]}`}
          alt="Product image"
        />
        <div>
          <h4 className="text-sm md:text-base font-semibold">
            {cartData?.product?.product_name}
          </h4>
          <p className="text-xs md:text-sm mt-1">
            ${cartData?.product?.sell_price}.00
          </p>
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
          <span>{quantity}</span>
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
            ${cartData?.quantity * cartData?.product?.sell_price}.00
          </div>
          <button
            onClick={handleRemoveCartItem}
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
