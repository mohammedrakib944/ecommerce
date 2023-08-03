"use client";
import ClientLayout from "@/components/common/ClientLayout";
import CartCard from "@/components/cart/CartCard";
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Spinner from "@/components/common/Spinner";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "@/redux/features/order/orderSlice";
import { useGetCartQuery } from "@/redux/features/cart/cartApi";
import { useCreateOrderMutation } from "@/redux/features/order/orderApi";

const Cart = () => {
  const user = useSelector((state) => state.user);
  const [subTotal, setSubTotal] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetCartQuery(user?._id, {
    refetchOnMountOrArgChange: true,
  });
  const [
    createOrder,
    {
      data: orderData,
      isLoading: orderCreating,
      isSuccess: orderCreateSuccess,
      error: createOrderError,
    },
  ] = useCreateOrderMutation();

  const handleCreateOrder = () => {
    if (user.email) {
      createOrder(user._id);
    } else {
      toast.error("Login required");
    }
  };

  // Order create handle
  useEffect(() => {
    // If error creating error
    if (createOrderError) {
      console.log("Hi there");
      toast.error(createOrderError.data?.message);
    }
    // If order create success
    if (orderCreateSuccess) {
      router.push("/checkout");
    }
    // If Data Avaiable
    if (orderData) {
      dispatch(setOrder(orderData.payload));
    }
  }, [orderCreateSuccess, createOrderError, orderData]);

  // Calculate prices
  useEffect(() => {
    if (data) {
      let totalPrice = 0;
      data.payload.cart.forEach((item) => {
        totalPrice += item.quantity * item.product.sell_price;
      });
      setSubTotal(totalPrice);
    }
  }, [data]);

  if (isLoading) return <Spinner title="Cart loading..." />;

  if (isError)
    return (
      <div className="alert alert-error">
        <BiErrorCircle />
        <span>Error getting cart data!</span>
      </div>
    );

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
          {data &&
            data.payload.cart.map((item, index) => (
              <CartCard key={index} cartData={item} />
            ))}
        </div>
        <div className="flex flex-col items-end justify-end mt-16">
          <h3 className="font-semibold text-base w-[260px] flex justify-between">
            <span>Subtotal</span>{" "}
            <span className="font-bold">${subTotal}.00 USD</span>
          </h3>
          <p className="pb-5 mt-4 text-xs text-gray-500">
            Taxes and shipping calculated at checkout
          </p>
          <button
            onClick={handleCreateOrder}
            disabled={orderCreating}
            className="btn_sp text-xs w-[250px]"
          >
            Check Out
          </button>
        </div>

        {/* Similer product */}
        {/* <div className="mt-20">
          <h3>You may also like</h3>
          <div className="mt-4 grid gap-4 grid-cols-2 lg:grid-cols-3">
            {products.map(
              (product, index) =>
                index < 3 && <ProductCard key={product.id} product={product} />
            )}
          </div>
        </div> */}
      </div>
    </ClientLayout>
  );
};

export default Cart;
