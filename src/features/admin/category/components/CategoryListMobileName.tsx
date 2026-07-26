import { Badge } from "@/components/ui/badge";
import { Folder, ReceiptText } from "lucide-react";
import type { ICategoryListItem } from "../interfaces/category.interface";

export default function CategoryListMobileName({
  c,
}: {
  c: ICategoryListItem;
}) {
  return (
    <>
      {(c.childrenCount && c.childrenCount > 0) || c.parentId === null ? (
        <Folder className="size-5 text-primary shrink-0" strokeWidth={2.5} />
      ) : (
        <ReceiptText
          className="size-5 text-muted-foreground shrink-0"
          strokeWidth={2.5}
        />
      )}

      <div className={`flex flex-col flex-1 min-w-0`}>
        <span className="font-bold text-base">{c.name}</span>
        <span className={`font-semibold text-xs text-muted-foreground `}>
          {c.childrenCount > 0 ? `${c.childrenCount} danh mục con` : ""}
        </span>
      </div>

      {c.isActive ? (
        <Badge className="shrink-0">Hiển thị</Badge>
      ) : (
        <Badge variant={"destructive"} className="shrink-0">
          Ẩn
        </Badge>
      )}
    </>
  );
}
