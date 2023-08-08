"use client";

import { AiOutlineShoppingCart, AiOutlineWarning } from "react-icons/ai";
import QuantityBtn from "./QuantityBtn";
import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const AddToCart = ({ productId = null }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    const savingData = {
      user_id: 691,
      productId,
      quantity,
    };

    console.log(savingData);
  };

  return (
    <div>
      <div>
        <div className="mt-4">
          <h4 className="text-sm font-semibold mt-3">Quantity</h4>
          <QuantityBtn
            quantity={quantity}
            setQuantity={setQuantity}
            stock={4}
          />
        </div>

        <div className="mt-8">
          <Toaster position="bottom-center" />
          <button className="btn_outline gap-2" onClick={handleAddToCart}>
            <AiOutlineShoppingCart />
            Add to cart
          </button>
        </div>

        <div className="mt-3">
          <button className="btn_sp cursor-not-allowed">Buy it now</button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
