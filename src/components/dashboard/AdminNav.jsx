import { MdSearch, MdNotifications } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import Badge from "../common/Badge";
import { useSelector } from "react-redux";

const AdminNav = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="w-full bg-white shadow sticky top-0 px-6 py-4 flex items-center justify-between z-10">
      <div className="hidden lg:flex items-center gap-2 bg-gray-200 px-3 rounded-sm">
        <MdSearch />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none py-2"
        />
      </div>

      {/* Menu button */}
      <label
        htmlFor="my-drawer-2"
        className="drawer-button text-xl cursor-pointer lg:hidden "
      >
        <RiMenu2Fill />
      </label>

      <div className="flex items-center gap-2">
        <div className="pr-10">
          <Badge icon={<MdNotifications />} value="7" />
        </div>

        <div>
          <h3 className="group-hover:text-gray-600 text-sm font-semibold">
            {user?.name}
          </h3>
          <p className="text-xs float-right">
            {user?.is_admin ? "(Admin)" : "(User)"}
          </p>
        </div>
        <img
          className="w-[40px] h-[40px] rounded-full border border-primary"
          src={user?.image}
          alt="Admin Image"
        />
      </div>
    </div>
  );
};

export default AdminNav;
