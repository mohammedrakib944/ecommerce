"use client";

import { AiOutlineShoppingCart, AiOutlineWarning } from "react-icons/ai";
import QuantityBtn from "./QuantityBtn";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAddToCartMutation } from "@/redux/features/cart/cartApi";
import { useRouter } from "next/navigation";

const AddToCart = ({ id = null, stock = 1 }) => {
  const user = useSelector((state) => state.user);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const [addToCart, { isLoading, isSuccess, error }] = useAddToCartMutation();

  const handleAddToCart = async (product_id, buy_now) => {
    if (!user.email || !product_id) {
      toast.error("Login required!");
      return;
    }

    const sendingData = {
      user_id: user._id,
      product: product_id,
      quantity,
    };
    // Send data to API
    await addToCart(sendingData);
    if (buy_now) router.push("/cart");
  };

  // Success, error - messages
  useEffect(() => {
    if (isSuccess) {
      toast.success("Product added success!");
    }
    if (error) {
      toast.error(error.data?.message);
    }
  }, [isSuccess, error]);

  return (
    <div>
      {stock <= 0 ? (
        <div className="alert alert-error !font-semibold !rounded-md !mt-6">
          <AiOutlineWarning />
          <span>This product is Out of Stock.</span>
        </div>
      ) : (
        <div>
          <div className="mt-4">
            <h4 className="text-sm font-semibold mt-3">Quantity</h4>
            <QuantityBtn
              quantity={quantity}
              setQuantity={setQuantity}
              stock={stock}
            />
          </div>

          <div className="mt-8">
            <Toaster position="bottom-center" />
            <button
              className="btn_outline gap-2"
              disabled={isLoading}
              onClick={() => handleAddToCart(id)}
            >
              <AiOutlineShoppingCart />
              Add to cart
            </button>
          </div>

          <div className="mt-3">
            <button
              className="btn_sp"
              onClick={() => handleAddToCart(id, true)}
            >
              Buy it now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
