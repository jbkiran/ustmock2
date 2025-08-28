import type { ProductCardType } from "../types/productTypes";
import FavouriteButton from "./ui/FavouriteButton";
import PriceLabel from "./ui/PriceLabel";
import StatusBadge from "./ui/StatusBadge";

const ProductCard = ({
  product,
  isFavourite,
  toggleFavourite,
}: ProductCardType) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="font-semibold text-lg"> {product.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-2">
          <PriceLabel currencyType={"gbp"} price={product.price} />
          <StatusBadge availabilityStatus={product.availabilityStatus} />
          <FavouriteButton
            isFavourite={isFavourite(product.id)}
            toggleFavourite={() => toggleFavourite(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
