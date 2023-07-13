import Image from "next/image";
import Background from "../../../public/images/search_bg.jpg";

const Banner = () => {
  return (
    <div>
      <Image
        className="h-[200px] object-cover"
        src={Background}
        alt="Banner Background"
      />
    </div>
  );
};

export default Banner;
