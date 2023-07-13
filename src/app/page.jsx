import Banner from "@/components/home/Banner";
import { categories } from "@/components/data";
import ProductCard from "@/components/common/ProductCard";
import { products } from "@/components/data";
import ClientLayout from "@/components/common/ClientLayout";

export default function Home() {
  return (
    <ClientLayout>
      <Banner />

      {/* Category */}
      <div className="pt-8">
        <h2 className="uppercase">FEATURED CATEGORIES</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((category) => (
            <div
              className="w-fit px-5 py-3 font-semibold text-sm border border-black hover:bg-black hover:text-white duration-200"
              key={category.id}
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="mt-8">
        <h2 className="uppercase">Products</h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 place-items-center md:place-items-stretch gap-x-4 gap-y-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Loadmore Button */}
      <div className=" mt-10 flex justify-center">
        <button className="btn_blue">Load more</button>
      </div>
    </ClientLayout>
  );
}
