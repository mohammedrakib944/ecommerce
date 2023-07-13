"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";

const AddToCart = ({ id = null }) => {
  const session = useSession();

  const handleAddToCart = (id) => {
    if (session.status === "unauthenticated") {
      toast.error("Login required!");
    }
  };

  return (
    <div className="mt-6">
      <Toaster position="bottom-center" />
      <button className="btn_outline gap-2" onClick={() => handleAddToCart(id)}>
        <AiOutlineShoppingCart />
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
