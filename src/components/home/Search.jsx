import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
// redux
import { useGetProductsQuery } from "@/redux/features/products/productApi";
import { useDispatch } from "react-redux";
import { setProducts } from "@/redux/features/products/productSlice";
import toast, { Toaster } from "react-hot-toast";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  // get products by category
  const {
    data: response,
    isSuccess,
    error,
  } = useGetProductsQuery({ search }, { refetchOnMountOrArgChange: true });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target[0].value);
  };

  useEffect(() => {
    if (isSuccess && response) {
      dispatch(setProducts(response.products));
    }
    if (error) {
      toast.error("No products found!");
    }
  }, [isSuccess, error]);

  return (
    <div className="max-w-[360px] mx-auto">
      <form onSubmit={handleSearch}>
        <div className="bg-white min-w-full rounded-full overflow-hidden text-sm border border-gray-500 hover:border-black flex items-center justify-between hover:shadow-lg duration-200 ">
          <input
            className="py-2 px-4 w-full text-black outline-none"
            placeholder="Search product"
            type="text"
          />
          <button type="submit" className="px-4">
            <AiOutlineSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
