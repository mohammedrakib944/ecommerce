import { MdSell, MdShoppingCart } from "react-icons/md";
import { FaMoneyBillWave, FaUsers } from "react-icons/fa";

export const Dashboard_data = [
  {
    title: "Total customers",
    icon: <FaUsers />,
    value: "211",
  },
  {
    title: "Total sells (month)",
    icon: <MdSell />,
    value: "$510",
  },
  {
    title: "Average order value",
    icon: <FaMoneyBillWave />,
    value: "$9",
  },
  {
    title: "Total orders (Running)",
    icon: <MdShoppingCart />,
    value: "12",
  },
];
