import type { StatusBadgeProps } from "types/productTypes";

const Cartbutton = ({ availabilityStatus }: StatusBadgeProps) => {
  const isAvailable = availabilityStatus !== "No Stock";
  return (
    <>
      <button
        className={`mt-3 w-full rounded-xl py-2  ${
          isAvailable
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {isAvailable ? "Add to Cart" : "Unavailable"}
      </button>
    </>
  );
};

export default Cartbutton;
