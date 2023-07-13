"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";

const ProductCard = ({ product }) => {
  const session = useSession();
  const handleCart = () => {
    if (session.status === "unauthenticated") {
      toast.error("Login required!");
      return;
    }
  };
  return (
    <div className="min-w-[180px] max-w-[320px] group">
      <Toaster position="bottom-center" />
      <Link href="/details">
        <Image
          className="w-full max-h-[300px] cursor-pointer md:group-hover:scale-105 group-hover:shadow-lg border border-gray-400 duration-200"
          src={product?.image}
          alt="product iamge"
        />
      </Link>
      <div className="p-3">
        <div className="text-sm ">
          <Link
            href="/details"
            className="font-semibold hover:text-blue-600 hover:underline cursor-pointer"
          >
            {product?.title}
          </Link>
          <p>Price: ${product?.price}</p>
        </div>
        <div className="mt-2 flex gap-2 items-center">
          {/* <button className="btn_blue">Buy now</button> */}
          <button className="btn_black" onClick={handleCart}>
            <AiOutlineShoppingCart /> shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
