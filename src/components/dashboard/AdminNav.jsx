import { MdSearch, MdNotifications } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import Image from "next/image";
import Avatar from "../../../public/images/avatar.png";
import Badge from "../common/Badge";

const AdminNav = () => {
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

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="flex gap-2 cursor-pointer group">
            <div className="uppercase">
              <h3 className="group-hover:text-gray-600 text-sm font-semibold">
                MD.Rakibuzzaman
              </h3>
              <p className="text-xs float-right">(Admin)</p>
            </div>
            <Image
              className="rounded-full border border-primary"
              src={Avatar}
              width={40}
              height={40}
              alt="Admin Image"
            />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
