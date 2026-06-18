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
  Trash,
} from "lucide-react";
import { NavLink } from "react-router";
import type { ICategoryListItem } from "../category.api";

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

interface CategoryListMobileProps {
  data: ICategoryListItem[];
}

export default function CategoryListMobile() {
  return (
    <div className="flex flex-col">
      {categories?.map((c) => (
        <div key={c.id} className="flex items-center w-full rounded-xl group">
          <NavLink
            to={`/admin/category/${c.id}`}
            className={`flex items-center gap-3 flex-1 py-3 px-2 rounded-xl select-none transition-colors duration-150 active:bg-accent`}
          >
            <Folder
              className="size-5 text-primary shrink-0"
              strokeWidth={2.5}
            />

            <div className="flex flex-col flex-1 min-w-0">
              <span className="font-bold text-base">{c.name}</span>
              <span className="font-semibold text-xs text-muted-foreground">
                {c.childrenCount} danh mục con
              </span>
            </div>

            {c.isActive ? (
              <Badge className="shrink-0">Hiển thị</Badge>
            ) : (
              <Badge variant={"destructive"} className="shrink-0">
                Ẩn
              </Badge>
            )}
          </NavLink>

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
      ))}
    </div>
  );
}
