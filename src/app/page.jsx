import Banner from "@/components/home/Banner";
import ClientLayout from "@/components/common/ClientLayout";
import ShowProducts from "@/components/home/ShowProducts";
import ShowCategorys from "@/components/home/ShowCategorys";

export default function Home() {
  return (
    <ClientLayout>
      <Banner />

      {/* Category */}
      <div className="pt-8">
        <h2 className="uppercase">FEATURED CATEGORIES</h2>
        <ShowCategorys />
      </div>

      {/* Products */}
      <div className="mt-8">
        <h2 className="uppercase">Products</h2>
        <ShowProducts />
      </div>

      {/* Loadmore Button */}
      {/* <div className=" mt-10 flex justify-center">
        <button className="btn_blue">Load more</button>
      </div> */}
    </ClientLayout>
  );
}
