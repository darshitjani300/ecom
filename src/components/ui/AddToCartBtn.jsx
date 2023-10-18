import { useContext } from "react";
import { myContext } from "../../App";

const AddToCartBtn = ({ qView }) => {
  const { AddToCart } = useContext(myContext);
  return (
    <button
      onClick={() => AddToCart(null, qView)}
      className="border-[1px] border-[#222328] bg-[#222328] text-white p-2 tracking-[1px] text-[12px] xl:text-[1rem]"
    >
      Add to Cart
    </button>
  );
};

export const AddtoFavBtn = () => {
  return (
    <button className="border-[1px] bg-[#e1e1e1] text-[#222328] p-2 tracking-[1px] text-[12px]">
      Add to Favorite
    </button>
  );
};

export default AddToCartBtn;
