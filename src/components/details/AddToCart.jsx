"use client";

import { AiOutlineShoppingCart, AiOutlineWarning } from "react-icons/ai";
import QuantityBtn from "./QuantityBtn";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// redux
import { useDispatch } from "react-redux";
import { setCartItems } from "@/redux/features/cart/cartSlice";

function generateUniqueId() {
  let id = (Math.random() * Date.now()) / 1e6;
  return Math.round(id);
}

const AddToCart = ({ productId = null }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    const savingData = {
      id: generateUniqueId(),
      productId,
      quantity,
    };
    // save data to local storage
    const prevItems = JSON.parse(localStorage.getItem("cart_items"));
    let data = [];
    if (prevItems) {
      data = prevItems;
      data.push(savingData);
    } else {
      data.push(savingData);
    }
    localStorage.setItem("cart_items", JSON.stringify(data));
    dispatch(setCartItems());
    toast.success("Item added!");
  };

  return (
    <div>
      <Toaster position="bottom-center" />
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
          <button className="btn_outline gap-2" onClick={handleAddToCart}>
            <AiOutlineShoppingCart />
            Add to cart
          </button>
        </div>

        <div className="mt-3">
          <button
            className="btn_sp cursor-not-allowed"
            onClick={() => toast.error("Login required!")}
          >
            Buy it now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
