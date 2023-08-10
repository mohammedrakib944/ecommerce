"use client";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

const FixedRating = ({ rate, count }) => {
  return (
    <div className="flex items-center gap-1 pt-1">
      <Rating
        className="mt-1"
        emptySymbol={<AiOutlineStar />}
        fullSymbol={<AiFillStar />}
        initialRating={rate}
        readonly
      />
      <span className="text-xs">{rate}</span>
      <span className="text-xs">{count && "(" + count + ")"}</span>
    </div>
  );
};

export default FixedRating;
