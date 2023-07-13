"use client";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const QuantityBtn = () => {
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
    <div>
      <div className="mt-2 w-[120px] border border-gray-500 flex items-center justify-between">
        <button
          disabled={quantity == 1 ? true : false}
          className="p-3 text-sm disabled:text-gray-400"
          onClick={() => handleQuantity("-")}
        >
          <AiOutlineMinus />
        </button>
        <span>{quantity}</span>
        <button className="p-3 text-sm" onClick={() => handleQuantity("+")}>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default QuantityBtn;
