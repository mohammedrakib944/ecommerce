"use client";
// Default theme
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { API_URL } from "@/redux/features/api/apiSlice";
import "@splidejs/react-splide/css";

const SlideShow = ({ images }) => {
  return (
    <Splide
      options={{
        rewind: true,
      }}
    >
      {images &&
        images.map((image) => (
          <SplideSlide key={image}>
            <img
              className="w-full"
              src={`${API_URL}/images/products/${image}`}
              alt="Image 1"
            />
          </SplideSlide>
        ))}
    </Splide>
  );
};

export default SlideShow;
