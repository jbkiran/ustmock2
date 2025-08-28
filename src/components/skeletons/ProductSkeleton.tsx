import Skeleton from "../ui/Skeleton";

const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      <Skeleton className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3 w-full" />
        <div className="flex items-center justify-between mt-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-16 rounded-full" />
        </div>
        <Skeleton className="mt-3 h-10 w-full rounded-xl" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
