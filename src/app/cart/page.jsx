import React from "react";
import ClientLayout from "@/components/common/ClientLayout";
import CartCard from "@/components/cart/CartCard";
import ProductCard from "@/components/common/ProductCard";
import { products } from "@/components/data";
import Link from "next/link";

const Cart = () => {
  return (
    <ClientLayout>
      <div>
        <div className="flex justify-between py-4 mt-3">
          <h2>Your cart</h2>
          <a href="#" className="hover:underline text-blue-600 font-semibold">
            Continue shopping
          </a>
        </div>
        <div className="flex justify-between py-3 border-b text-gray-400 text-sm">
          <p>Product</p>
          <p>Quantity</p>
          <p>total</p>
        </div>
        <div>
          <CartCard />
          <CartCard />
        </div>
        <div className="flex flex-col items-end justify-end mt-16">
          <h3 className="font-semibold text-base w-[260px] flex justify-between">
            <span>Subtotal</span>{" "}
            <span className="font-bold">$1080.00 USD</span>
          </h3>
          <p className="pb-5 mt-4 text-xs text-gray-500">
            Taxes and shipping calculated at checkout
          </p>
          <Link href="/checkout">
            <button className="btn_sp text-xs w-[250px]">Check Out</button>
          </Link>
        </div>

        {/* Similer product */}
        <div className="mt-20">
          <h3>You may also like</h3>
          <div className="mt-4 grid gap-4 grid-cols-2 lg:grid-cols-3">
            {products.map(
              (product, index) =>
                index < 3 && <ProductCard key={product.id} product={product} />
            )}
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Cart;
