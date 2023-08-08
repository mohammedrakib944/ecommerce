"use client";
import ClientLayout from "@/components/common/ClientLayout";
import CartCard from "@/components/cart/CartCard";
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Spinner from "@/components/common/Spinner";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
// redux

const Cart = () => {
  // if (isLoading) return <Spinner title="Cart loading..." />;

  return (
    <ClientLayout>
      <Toaster position="bottom-center" />
      <div>
        <div className="flex justify-between py-4 mt-3">
          <h2 className="flex gap-2 items-center">
            <AiOutlineShoppingCart /> Your cart
          </h2>
          <Link
            href="/"
            className="hover:underline text-blue-600 font-semibold"
          >
            Continue shopping
          </Link>
        </div>
        <div className="flex justify-between py-3 border-b text-gray-400 text-sm">
          <p>Product</p>
          <div className="min-w-[180px] md:min-w-[250px] lg:min-w-[350px] flex items-center justify-between">
            <p>Quantity</p>
            <p>total</p>
          </div>
        </div>
        <div>
          {/* {data &&
            data.payload.cart.map((item, index) => (
              <CartCard key={index} cartData={item} />
            ))} */}
        </div>
        <div className="flex flex-col items-end justify-end mt-16">
          <h3 className="font-semibold text-base w-[260px] flex justify-between">
            <span>Subtotal</span> <span className="font-bold">$23.00 USD</span>
          </h3>
          <p className="pb-5 mt-4 text-xs text-gray-500">
            Taxes and shipping calculated at checkout
          </p>
          <button className="btn_sp text-xs w-[250px]">Check Out</button>
        </div>

        {/* Similer product */}
      </div>
    </ClientLayout>
  );
};

export default Cart;
