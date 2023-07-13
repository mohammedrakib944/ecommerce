"use client";
import React from "react";
import ProductImg from "../../../public/products/camera.jpg";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import Image from "next/image";

const CartCard = () => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (op) => {
    if (op === "+") {
      setQuantity((prev) => prev + 1);
    }
    if (op === "-") {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };
  return (
    <div className="flex justify-between items-center border-b">
      <div className="col-span-4 flex gap-3 items-center">
        <Image
          className="w-[100px] md:w-[160px] lg:w-[230px]"
          src={ProductImg}
          alt="Product image"
        />
        <div>
          <h4 className="text-sm md:text-base font-semibold">
            Title goes here
          </h4>
          <p className="text-xs md:text-sm mt-1">$560.00</p>
        </div>
      </div>

      <div className=" mt-2 w-[80px] md:w-[120px] h-fit border border-gray-500 flex items-center justify-between">
        <button
          disabled={quantity == 1 ? true : false}
          className="p-3 text-xs md:text-sm disabled:text-gray-400"
          onClick={() => handleQuantity("-")}
        >
          <AiOutlineMinus />
        </button>
        <span>{quantity}</span>
        <button className="p-3 text-sm" onClick={() => handleQuantity("+")}>
          <AiOutlinePlus />
        </button>
      </div>

      <div className="flex gap-3 md:gap-5">
        <div className="text-sm md:text-base font-semibold">$560.00</div>
        <button className="w-20px text-xl hover:text-red-500">
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
