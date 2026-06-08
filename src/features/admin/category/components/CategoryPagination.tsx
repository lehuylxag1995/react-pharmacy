import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategoryPagination() {
  return (
    <div className="flex flex-col gap-5">
      {/* số hiển thị  */}
      <span className="text-base text-muted-foreground capitalize">
        hiển thị 1 - 7 của 15 sản phẩm
      </span>

      {/* phân trang */}
      <div className="flex items-center justify-center gap-4 pb-5">
        <div className="size-11 flex items-center justify-center bg-secondary text-secondary-foreground rounded-lg">
          <ChevronLeft className="size-5" />
        </div>
        <div className="size-11 flex items-center justify-center bg-primary text-base text-primary-foreground rounded-lg">
          <span>1</span>
        </div>
        <div className="size-11 flex items-center justify-center bg-secondary text-base text-secondary-foreground rounded-lg">
          <span>2</span>
        </div>
        <div className="size-11 flex items-center justify-center bg-secondary text-base text-secondary-foreground rounded-lg">
          <span>3</span>
        </div>
        <div className="size-11 flex items-center justify-center bg-secondary text-secondary-foreground rounded-lg">
          <ChevronRight className="size-5" />
        </div>
      </div>
    </div>
  );
}
