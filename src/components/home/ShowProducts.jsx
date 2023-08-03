"use client";
import { useGetProductsQuery } from "@/redux/features/products/productApi";
import ProductCard from "../common/ProductCard";
import Spinner from "../common/Spinner";
import { useSelector } from "react-redux";

const ShowProducts = () => {
  const products = useSelector((state) => state.product);
  const { isLoading } = useGetProductsQuery(
    { search: "", page: "" },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  return (
    <div>
      {isLoading ? (
        <Spinner title="Products Loading..." />
      ) : (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center md:place-items-stretch gap-x-4 gap-y-6">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ShowProducts;
