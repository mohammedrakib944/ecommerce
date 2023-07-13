import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="max-w-[360px] mx-auto">
      <div className="bg-white min-w-full rounded-full overflow-hidden text-sm border border-gray-500 hover:border-black flex items-center justify-between hover:shadow-lg duration-200 ">
        <input
          className="py-2 px-4 w-full text-black outline-none"
          placeholder="Search product"
          type="text"
        />
        <button className="px-4">
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
