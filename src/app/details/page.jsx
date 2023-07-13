import ClientLayout from "@/components/common/ClientLayout";
import QuantityBtn from "@/components/details/QuantityBtn";
import Camera from "../../../public/products/camera.jpg";
import Image from "next/image";
import AddToCart from "@/components/details/AddToCart";
import Link from "next/link";
import ProductCard from "@/components/common/ProductCard";
import { products } from "@/components/data";

const Details = () => {
  return (
    <ClientLayout>
      <div className="mt-8">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="col-span-3">
            <Image className="w-full" src={Camera} alt="Image" />
          </div>
          <div className="col-span-2">
            <h2>Cannon 6D mark ii</h2>
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
              <span className="text-sm font-semibold">Price:</span>{" "}
              <span className="font-bold">$500</span>
            </h4>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mt-3">Quantity</h4>
              <QuantityBtn />
            </div>
            <div>
              <AddToCart id={"908230"} />
            </div>
            <div className="mt-3">
              <Link href="/checkout">
                <button className="btn_sp">Buy it now</button>
              </Link>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="border mt-3 p-4">
          <p className="mt-2">
            Canon EOS 6D Mark II DSLR Camera Price in Bangladesh Star Tech
            https://www.startech.com.bd Camera DSLR Canon canon 60d mark 2 from
            www.startech.com.bd Model: Canon EOS 6D Mark II · 26.2MP Full-Frame
            CMOS Sensor · DIGIC 7 Image Processor · Full HD Video at 60 fps;
            Digital IS · 6.5 fps Shooting · View More Info ... Lens Mount: Canon
            EF Battery: 2000mAh capacity, 7.2V Image Type: CMOS Features: DIGIC
            7
          </p>
        </div>

        {/* Similer product */}
        <div className="mt-8">
          <h3>Similar products</h3>
          <div className="mt-4 grid gap-4 grid-cols-2 lg:grid-cols-3">
            {products.map(
              (product, index) =>
                index < 3 && <ProductCard key={product.id} product={product} />
            )}
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Details;
