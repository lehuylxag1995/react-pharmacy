import { Folder } from "lucide-react";

export default function CategoryListEmpty() {
  return (
    <div className="min-h-[40vh] w-full flex flex-col items-center justify-center gap-3">
      {/* icon */}
      <div
        className={`size-25 flex items-center justify-center bg-accent rounded-full`}
      >
        <Folder className={`size-14 shrink-0 text-primary`} />
      </div>

      {/* noi dung */}
      <div className="flex flex-col gap-1 text-center text-pretty">
        <span className="font-bold text-xl text-foreground">
          Chưa có danh mục nào
        </span>
        <span className="max-w-md text-muted-foreground text-sm ">
          Hiện tại chưa có danh mục nào trong hệ thống. Bạn có thể thêm danh mục
          mới
        </span>
      </div>
    </div>
  );
}
