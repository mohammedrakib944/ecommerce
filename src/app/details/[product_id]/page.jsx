import ClientLayout from "@/components/common/ClientLayout";
import AddToCart from "@/components/details/AddToCart";
import { notFound } from "next/navigation";
import FixedRating from "@/components/common/FixedRating";
import SimilarProducts from "@/components/details/SimilarProducts";

const API_URL = process.env.API_URL;

async function getData(product_id) {
  const res = await fetch(`${API_URL}/products/${product_id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const Details = async ({ params }) => {
  const product = await getData(params.product_id);

  return (
    <ClientLayout>
      <div className="mt-8">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="col-span-3">
            {/* Slide show */}
            <div className="border p-4 flex items-center justify-center">
              <img
                className="w-full max-h-[400px] object-contain"
                src={product?.image}
                alt={product?.title}
              />
            </div>
          </div>
          <div className="col-span-2">
            <h2>{product?.title}</h2>
            <FixedRating
              rate={product?.rating?.rate}
              count={product?.rating?.count}
            />
            <h4 className="mt-2">
              <span className="text-sm font-semibold">Price:</span>
              <span className="font-bold">${product?.price}</span>
            </h4>
            {/* <h4 className="mt-4">
              <span className="text-sm font-semibold">Stock:</span>
              <span className="font-bold"> {product?.payload?.quantity}</span>
            </h4> */}
            <AddToCart productId={product?.id} />
          </div>
        </div>

        {/* Similer product */}
        <SimilarProducts category={product?.category} />
      </div>
    </ClientLayout>
  );
};

export default Details;
