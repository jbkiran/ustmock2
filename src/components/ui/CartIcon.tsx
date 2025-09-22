import { AiOutlineShoppingCart } from "react-icons/ai";

type CartProps = {
  cartItemCount: number;
};

const CartIcon = ({ cartItemCount }: CartProps) => {
  return (
    <div className="relative cursor-pointer">
      <AiOutlineShoppingCart className="text-3xl" />
      <span className="absolute -top-2 -right-4 px-2 py-0.5 bg-red-600 rounded-full text-xs text-white font-bold">
        34
      </span>
    </div>
  );
};

export default CartIcon;
