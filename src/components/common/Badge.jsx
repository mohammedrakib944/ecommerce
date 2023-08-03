import { MdNotifications } from "react-icons/md";

const Badge = ({ icon = <MdNotifications />, value = 8 }) => {
  return (
    <div className="text-xl relative cursor-pointer bg-gray-400/10 hover:bg-gray-400/30 duration-150 rounded-full p-2">
      {icon}
      <span className="text-xs absolute bg-red-600 text-white font-semibold px-2 border-2 border-white rounded-full -top-2 -right-4">
        {value}
      </span>
    </div>
  );
};

export default Badge;
