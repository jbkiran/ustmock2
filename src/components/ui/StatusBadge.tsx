import type { AvailabilityStatus, StatusBadgeProps } from "types/productTypes";

const StatusBadge = ({ availabilityStatus }: StatusBadgeProps) => {
  const statusClass: Record<AvailabilityStatus, string> = {
    "In Stock": "bg-green-100 text-green-700",
    "Low Stock": "bg-yellow-100 text-yellow-700",
    "No Stock": "bg-red-100 text-red-600",
  };

  return (
    <>
      <span
        className={`text-xs px-2 py-1 rounded-full ${statusClass[availabilityStatus]}`}
      >
        {availabilityStatus}
      </span>
    </>
  );
};

export default StatusBadge;
