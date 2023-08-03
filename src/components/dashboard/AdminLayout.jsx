"use client";
import { MdLogout } from "react-icons/md";
import { signOut } from "next-auth/react";
import AdminNav from "./AdminNav";
import Link from "next/link";
import { SideLinks } from "./data";
import { usePathname } from "next/navigation";

const AdminLayout = ({ children }) => {
  const pathname = usePathname();

  const handleLogout = () => {
    if (confirm("You want logout?")) {
      localStorage.removeItem("auth");
      signOut();
    }
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Admin Nabbar */}
        <AdminNav />

        {/* Page content here  */}
        <div className="py-4 px-6 w-full min-h-screen bg-gray-100">
          {children}
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-black">
          <li className="text-3xl font-extrabold logo_gradient  pl-4 mb-4">
            ER.Admin{" "}
            <Link className="text-xs hover:text-white" href="/">
              (Visit Site)
            </Link>
          </li>
          {/* Sidebar content here  */}
          {SideLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={"/dashboard" + item.link}
                className={
                  pathname === "/dashboard" + item.link
                    ? "text-gray-300 text-base hover:text-gray-100 py-3 active"
                    : "text-gray-300 text-base hover:text-gray-100 py-3"
                }
              >
                {item.icon} {item.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              onClick={handleLogout}
              className="text-gray-300 hover:text-gray-100"
            >
              <MdLogout /> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminLayout;
