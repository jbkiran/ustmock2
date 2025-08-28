export type AvailabilityStatus = "In Stock" | "Low Stock" | "No Stock";
export type StatusBadgeProps = {
  availabilityStatus: AvailabilityStatus;
};

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  availabilityStatus: AvailabilityStatus;
  thumbnail: string;
}
export type ProductCardType = {
  product: Product;
  isFavourite: (id: number) => boolean;
  toggleFavourite: (id: number) => void;
};
