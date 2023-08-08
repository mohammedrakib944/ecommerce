"use client";
import { useEffect, useState } from "react";
import { useGetCategoryQuery } from "@/redux/features/category/categoryApi";
import Spinner from "../common/Spinner";
import { useGetProductsQuery } from "@/redux/features/products/productApi";
import { useDispatch } from "react-redux";
import { setProducts } from "@/redux/features/products/productSlice";
import toast, { Toaster } from "react-hot-toast";
import { BiErrorCircle } from "react-icons/bi";

const ShowCategorys = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetCategoryQuery();
  const [search, setSearch] = useState("");
  // get products by category
  const {
    data: products,
    isSuccess,
    error,
    isLoading: productLoading,
  } = useGetProductsQuery(
    { search: `${search}` },
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    if (isSuccess && products) {
      dispatch(setProducts(products.products));
    }
  }, [isSuccess]);

  if (error && !productLoading)
    return (
      <div className="alert alert-error mt-3">
        <BiErrorCircle />
        <span>Could not get any product!</span>
      </div>
    );

  return (
    <div>
      <Toaster position="bottom-center" />
      <div className="flex flex-wrap gap-2 mt-4">
        <div
          onClick={() => setSearch("/")}
          className="w-fit cursor-pointer px-5 py-3 font-semibold text-sm border border-black hover:bg-black hover:text-white duration-200"
        >
          All
        </div>
        {isLoading ? (
          <Spinner title="Category Loading..." />
        ) : (
          data &&
          data.map((category) => (
            <button
              disabled={productLoading}
              onClick={() => setSearch(`category/${category}`)}
              key={category}
              className="w-fit cursor-pointer px-5 py-3 font-semibold text-sm border border-black hover:bg-black hover:text-white duration-200 disabled:opacity-30"
            >
              {category}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default ShowCategorys;
