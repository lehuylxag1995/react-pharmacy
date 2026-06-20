import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  EllipsisVertical,
  Eye,
  EyeOff,
  Folder,
  Pencil,
  ReceiptText,
  Trash,
} from "lucide-react";
import { NavLink, useSearchParams } from "react-router";
import { useGetCategories } from "../hooks/category.query";
import CategorySkeleton from "./CategorySkeleton";

export const categories = [
  {
    id: 1,
    parentId: null,
    name: "Thuốc",
    isActive: true,
    childrenCount: 4,
  },
  {
    id: 2,
    parentId: null,
    name: "Thực phẩm chức năng",
    isActive: true,
    childrenCount: 3,
  },
  {
    id: 3,
    parentId: null,
    name: "Chăm sóc cá nhân",
    isActive: false,
    childrenCount: 2,
  },
];

export default function CategoryListMobile() {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id")) || null;

  const { data, isLoading, isError } = useGetCategories({ id });

  if (isLoading) return <CategorySkeleton />;

  if (isError || !data) {
    return <div>Không tìm thấy danh mục !!</div>;
  }

  return (
    <div className="flex flex-col">
      {data.map((c) => {
        // 1. Kiểm tra xem có danh mục con hay không
        const hasChildren = c.childrenCount > 0;

        // 2. Tách phần ruột ra một biến riêng
        const renderContent = () => (
          <>
            {(c.childrenCount && c.childrenCount > 0) || c.parentId === null ? (
              <Folder
                className="size-5 text-primary shrink-0"
                strokeWidth={2.5}
              />
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

        return (
          <div key={c.id} className="flex items-center w-full rounded-xl">
            {hasChildren ? (
              <NavLink
                to={`/admin/categories?id=${c.id}`}
                className="flex items-center gap-3 flex-1 py-3 px-2 rounded-xl select-none transition-colors duration-150 active:bg-accent cursor-pointer"
              >
                {renderContent()}
              </NavLink>
            ) : (
              <div className="flex items-center gap-3 flex-1 py-3 px-2 rounded-xl select-none transition-colors duration-150 cursor-default opacity-80">
                {renderContent()}
              </div>
            )}

            <div className="px-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <EllipsisVertical className="size-5 shrink-0 cursor-pointer" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-auto" align="end">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>Chức năng</DropdownMenuLabel>
                    <DropdownMenuItem className="py-3">
                      <div className="flex items-center gap-3 font-semibold">
                        <Pencil className="size-5 shrink-0" />
                        <span className="whitespace-nowrap">Sửa danh mục</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="py-3">
                      {c.isActive ? (
                        <div className="flex items-center gap-3 text-warning font-semibold">
                          <EyeOff className="size-5 shrink-0" />
                          <span className="whitespace-nowrap">Ẩn danh mục</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3 text-warning font-semibold">
                          <Eye className="size-5 shrink-0" />
                          <span className="whitespace-nowrap">
                            Hiển thị danh mục
                          </span>
                        </div>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem className="py-3">
                      <div className="flex items-center gap-3 text-destructive font-semibold">
                        <Trash className="size-5 shrink-0" />
                        <span className="whitespace-nowrap">Xoá danh mục</span>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        );
      })}
    </div>
  );
}
