"use client";

import Image from "next/image";
import Cover from "../../../public/cover/Cover.jpg";
import Cover2 from "../../../public/cover/Cover2.jpg";
import Cover3 from "../../../public/cover/Coverl.jpg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Banner = () => {
  return (
    <Splide
      options={{
        rewind: true,
        autoplay: true,
        speed: 800,
        interval: 3000,
      }}
    >
      <SplideSlide>
        <Image
          width="960"
          height="300"
          className="w-full h-[300px] object-cover"
          src={Cover}
          alt="Image 1"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          width="960"
          height="300"
          className="w-full h-[300px] object-cover"
          src={Cover2}
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          width="960"
          height="300"
          className="w-full h-[300px] object-cover"
          src={Cover3}
          alt="Image 3"
        />
      </SplideSlide>
    </Splide>
  );
};

export default Banner;
