"use client";
import { useEffect, useState } from "react";
import { useGetCategoryQuery } from "@/redux/features/category/categoryApi";
import Spinner from "../common/Spinner";
import { useGetProductsQuery } from "@/redux/features/products/productApi";
import { useDispatch } from "react-redux";
import { setProducts } from "@/redux/features/products/productSlice";
import toast, { Toaster } from "react-hot-toast";

const ShowCategorys = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetCategoryQuery();
  const [search, setSearch] = useState("");
  // get products by category
  const {
    data: response,
    isSuccess,
    error,
  } = useGetProductsQuery({ search }, { refetchOnMountOrArgChange: true });

  useEffect(() => {
    if (isSuccess && response) {
      dispatch(setProducts(response.products));
    }
    if (error) {
      toast.error("No products found!");
    }
  }, [isSuccess, error]);

  return (
    <div>
      <Toaster position="bottom-center" />
      <div className="flex flex-wrap gap-2 mt-4">
        <div
          onClick={() => setSearch("")}
          className="w-fit cursor-pointer px-5 py-3 font-semibold text-sm border border-black hover:bg-black hover:text-white duration-200"
        >
          All
        </div>
        {isLoading ? (
          <Spinner title="Category Loading..." />
        ) : (
          data &&
          data.payload.category.map((category) => (
            <div
              onClick={() => setSearch(category.category_name)}
              key={category._id}
              className="w-fit cursor-pointer px-5 py-3 font-semibold text-sm border border-black hover:bg-black hover:text-white duration-200"
            >
              {category.category_name}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShowCategorys;
