import { Skeleton } from "@/components/ui/skeleton";

export default function CategorySkeleton() {
  return (
    <div className="flex flex-col">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex-1 flex items-center gap-3 py-3 px-2">
          <Skeleton className="size-10 rounded-2xl" />

          <div className={`flex flex-col flex-1 min-w-0 gap-1 `}>
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-3 w-1/2" />
          </div>

          <Skeleton className="px-8 py-3 rounded-full" />
          <Skeleton className="px-2 py-4" />
        </div>
      ))}
    </div>
  );
}
