"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsPersonCircle } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import Search from "../home/Search";
import { useEffect, useState } from "react";
import { useGetCartQuery } from "@/redux/features/cart/cartApi";

// redux
import { useSelector } from "react-redux";
import { useLoginMutation } from "@/redux/features/auth/authApi";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const cartItems = useSelector((state) => state.cart);
  const [login] = useLoginMutation();
  const session = useSession();

  // Insert user to Database
  const insertUser = async (data) => {
    login(data);
  };

  useEffect(() => {
    if (session.data && !user.email) {
      console.log("calling!");
      insertUser(session.data.user);
    }
  }, [session]);

  return (
    <div className="sticky top-0 border-b border-gray-200 bg-white z-10">
      <div className="navbar lg:py-3">
        <div className="navbar-start">
          <div className="dropdown relative">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <span className="bg-blue-800 p-2 rounded-full text-white">
                <AiOutlineSearch />
              </span>
            </label>
            {/* Mobile view */}
            <div
              tabIndex={0}
              className="mt-2 menu menu-sm dropdown-content bg-white z-[1] min-w-max"
            >
              <Search />
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/" className="cursor-pointer text-xl font-bold">
              ER.com
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Search />
        </div>
        <div className="navbar-end gap-7 text-xl">
          <Link
            href="/cart"
            className="relative cursor-pointer hover:text-blue-600"
          >
            <span>
              <AiOutlineShoppingCart />
            </span>
            {cartItems.length > 0 && (
              <span className="animate-ping absolute w-4 h-4 rounded-full text-center -top-3 -right-3 text-xs bg-blue-700 text-white"></span>
            )}
            <p className="w-4 h-4 rounded-full text-center absolute -top-3 -right-3 text-xs bg-black text-white">
              {cartItems?.length || 0}
            </p>
          </Link>

          <Link href="/login">
            <button className="btn_black">Login</button>
          </Link>
          {/* {session.status === "unauthenticated" ? (
            <button className="btn_black" onClick={signInHandler}>
              <FcGoogle /> Login with google
            </button>
          ) : (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="m-1 flex items-center gap-2">
                <img
                  className="w-[40px] h-[40px] rounded-full border cursor-pointer hover:shadow-md"
                  src={user?.image}
                  alt=""
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 border shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/profile" className="gap-2">
                    <BsPersonCircle />
                    {user?.name}
                  </Link>
                </li>
                <li>
                  <a
                    className="gap-2"
                    onClick={() => {
                      localStorage.removeItem("auth");
                      signOut();
                    }}
                  >
                    <BiLogOutCircle /> Logout
                  </a>
                </li>
              </ul>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
