import { GoHeart, GoHeartFill } from "react-icons/go";

type FavouriteProps = {
  isFavourite: boolean;
  toggleFavourite: () => void;
};

const FavouriteButton = ({ isFavourite, toggleFavourite }: FavouriteProps) => {
  return (
    <button onClick={toggleFavourite}>
      {isFavourite ? <GoHeartFill className="text-red-500" /> : <GoHeart />}
    </button>
  );
};

export default FavouriteButton;
