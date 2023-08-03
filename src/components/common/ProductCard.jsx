"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { API_URL } from "@/redux/features/api/apiSlice";
import { useAddToCartMutation } from "@/redux/features/cart/cartApi";

const ProductCard = ({ product }) => {
  const [addToCart, { isLoading, isSuccess, error }] = useAddToCartMutation();

  const handleAddToCart = () => {
    if (!product.user_id || !product._id) {
      toast.error("Login required!");
      return;
    }
    const sendingData = {
      user_id: product.user_id,
      product: product._id,
      quantity: 1,
    };
    // Send data to API
    addToCart(sendingData);
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
    <div className="min-w-[180px] max-w-[320px] group">
      <Toaster position="bottom-center" />
      <Link href={`/details/${product?._id}`}>
        <img
          className="w-full max-h-[300px] cursor-pointer md:group-hover:scale-105 group-hover:shadow-lg rounded duration-200"
          src={`${API_URL}/images/products/${product?.images[0]}`}
          alt={product?.product_name}
        />
      </Link>
      <div className="p-3">
        <div className="text-sm ">
          <Link
            href={`/details/${product?._id}`}
            className="font-semibold hover:text-blue-600 hover:underline cursor-pointer"
          >
            {product?.product_name}
          </Link>
          <div className="flex itece justify-between pt-2">
            <p className="text-gray-400">{product?.category}</p>
            <p>
              Price <span className="font-bold">${product?.sell_price}</span>
            </p>
          </div>
        </div>
        <div className="mt-2 flex gap-2 items-center">
          {/* <button className="btn_blue">Buy now</button> */}
          <button
            disabled={isLoading}
            className="btn_black"
            onClick={handleAddToCart}
          >
            <AiOutlineShoppingCart /> Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
