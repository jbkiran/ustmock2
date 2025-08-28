import { useState } from "react";

export function useFavourite() {
  const [favourite, setFavourite] = useState<number[]>(() => {
    if (typeof window !== "undefined") {
      const storedFavourites = localStorage.getItem("favouriteProducts");
      return storedFavourites ? JSON.parse(storedFavourites) : [];
    }
    return [];
  });

  const toggleFavourite = (id: number) => {
    setFavourite((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];

      localStorage.setItem("favouriteProducts", JSON.stringify(updated));
      return updated;
    });
  };

  const isFavourite = (id: number) => favourite.includes(id);

  return { favourite, toggleFavourite, isFavourite };
}
