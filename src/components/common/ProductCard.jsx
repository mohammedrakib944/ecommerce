"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAddToCartMutation } from "@/redux/features/cart/cartApi";
import FixedRating from "./FixedRating";

const ProductCard = ({ product }) => {
  const [addToCart, { isLoading, isSuccess, error }] = useAddToCartMutation();

  // const handleAddToCart = () => {
  //   if (!product.user_id || !product._id) {
  //     toast.error("Login required!");
  //     return;
  //   }
  //   const sendingData = {
  //     user_id: product.user_id,
  //     product: product._id,
  //     quantity: 1,
  //   };
  //   // Send data to API
  //   addToCart(sendingData);
  // };

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
    <div className="w-full min-w-[180px] max-w-[320px] group border overflow-hidden">
      <Toaster position="bottom-center" />
      <Link href={`/details/${product?.id}`}>
        <img
          className="w-full max-h-[130px] object-contain p-4 cursor-pointer md:group-hover:scale-110 duration-200"
          src={product?.image}
          alt={product?.title}
        />
      </Link>
      <div className="p-3">
        <div className="text-sm ">
          <p className="text-gray-400">{product?.category}</p>
          <div className="min-h-[40px]">
            <Link
              href={`/details/${product?.id}`}
              className="hover:text-blue-600 hover:underline cursor-pointer"
            >
              {product?.title?.slice(0, 40)}
              {product?.title?.length > 40 && "..."}
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="mt-1">
              Price <span className="font-bold">${product?.price}</span>
            </p>
            <FixedRating rate={product?.rating?.rate} />
          </div>
        </div>
        {/* <div className="mt-2 flex gap-2 items-center">
          <button
            disabled={isLoading}
            className="btn_black"
            onClick={handleAddToCart}
          >
            <AiOutlineShoppingCart /> Shop
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;
