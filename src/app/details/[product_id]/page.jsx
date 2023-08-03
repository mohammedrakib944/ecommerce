import ClientLayout from "@/components/common/ClientLayout";
import AddToCart from "@/components/details/AddToCart";
import { notFound } from "next/navigation";
import SlideShow from "@/components/details/SlideShow";

const API_URL = process.env.API_URL;

async function getData(product_id) {
  const res = await fetch(`${API_URL}/api/products/${product_id}`, {
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
            <SlideShow images={product?.payload?.images} />
          </div>
          <div className="col-span-2">
            <h2>{product?.payload?.product_name}</h2>
            <div className="text-sm flex items-center my-3 gap-3">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
              23 Ratings
            </div>
            <h4 className="mt-4">
              <span className="text-sm font-semibold">Price:</span>
              <span className="font-bold">${product?.payload?.sell_price}</span>
            </h4>
            <h4 className="mt-4">
              <span className="text-sm font-semibold">Stock:</span>
              <span className="font-bold"> {product?.payload?.quantity}</span>
            </h4>
            <AddToCart
              id={product?.payload?._id}
              stock={product?.payload?.quantity}
            />
          </div>
        </div>
        {/* Description */}
        <div className="border mt-3 p-4">
          <p className="mt-2">{product?.payload?.description}</p>
        </div>

        {/* Similer product */}
        {/* <div className="mt-8">
          <h3>Similar products</h3>
          <div className="mt-4 grid gap-4 grid-cols-2 lg:grid-cols-3">
            {products.map(
              (product, index) =>
                index < 3 && <ProductCard key={product.id} product={product} />
            )}
          </div>
        </div> */}
      </div>
    </ClientLayout>
  );
};

export default Details;
