import { AiOutlineShoppingCart } from "react-icons/ai";

const AddToCart = ({ id = null }) => {
  return (
    <div className="mt-6">
      <button className="btn_outline gap-2">
        <AiOutlineShoppingCart />
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
