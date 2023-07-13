import Link from "next/link";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Search from "../home/Search";

const cardItem = 2;

const Navbar = () => {
  return (
    <div className="sticky top-0 border-b border-gray-200 bg-white z-10">
      <div className="navbar lg:py-4">
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
            {cardItem > 0 && (
              <span className="animate-ping absolute w-4 h-4 rounded-full text-center -top-3 -right-3 text-xs bg-blue-700 text-white"></span>
            )}
            <span className="w-4 h-4 rounded-full text-center absolute -top-3 -right-3 text-xs bg-black text-white">
              {cardItem}
            </span>
          </Link>
          <a className="cursor-pointer hover:text-blue-600">
            <CgProfile />
          </a>
          <a className="btn_black">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
