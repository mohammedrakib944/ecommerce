import {
  MdDashboard,
  MdStorage,
  MdShoppingCart,
  MdPeopleAlt,
  MdSettings,
  MdImage,
} from "react-icons/md";
import { TbCategory } from "react-icons/tb";

// FOR ADMIN LAYOUT
export const SideLinks = [
  {
    name: "Dashboard",
    icon: <MdDashboard />,
    link: "",
  },
  {
    name: "Products",
    icon: <MdStorage />,
    link: "/products",
  },
  {
    name: "Photos",
    icon: <MdImage />,
    link: "/photos",
  },
  {
    name: "Categories",
    icon: <TbCategory />,
    link: "/categories",
  },
  {
    name: "Orders",
    icon: <MdShoppingCart />,
    link: "/orders",
  },
  {
    name: "Customers",
    icon: <MdPeopleAlt />,
    link: "/customers",
  },
  {
    name: "Settings",
    icon: <MdSettings />,
    link: "/settings",
  },
];
