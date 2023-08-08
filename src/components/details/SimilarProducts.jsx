"use client";
import Spinner from "../common/Spinner";
import { useGetProductsQuery } from "@/redux/features/products/productApi";
import ProductCard from "../common/ProductCard";

const SimilarProducts = ({ category }) => {
  const { data: products, isLoading } = useGetProductsQuery(
    { search: `category/${category}` },
    { refetchOnMountOrArgChange: true }
  );

  return (
    <div className="mt-8">
      <h3>Similar Products</h3>
      {isLoading ? (
        <Spinner title="Loading..." />
      ) : (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center md:place-items-stretch gap-2">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default SimilarProducts;
