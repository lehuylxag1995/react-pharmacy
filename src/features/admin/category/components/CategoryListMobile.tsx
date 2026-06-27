import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  AlertCircleIcon,
  EllipsisVertical,
  Eye,
  EyeOff,
  Folder,
  Pencil,
  ReceiptText,
  Trash,
} from "lucide-react";
import { NavLink, useSearchParams } from "react-router";
import { useGetCategories } from "../hooks/category.hook";
import CategoryListEmpty from "./CategoryListEmpty";
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

  const idParam = Number(searchParams.get("id")) || 0;
  const searchParam = searchParams.get("search") || "";
  const statusParam = Number(searchParams.get("status")) || 3;
  const sortByParam = Number(searchParams.get("sortBy")) || 1;

  const { data, isError, isLoading, error } = useGetCategories({
    id: idParam,
    search: searchParam,
    sortBy: sortByParam,
    status: statusParam,
  });

  if (isLoading) return <CategorySkeleton />;

  if (isError) {
    return (
      <>
        <span className="text-destructive bg-destructive/10 text-center rounded py-2 px-1">
          {error.error.message}
        </span>
        {error.error.details?.map((e) => (
          <Alert variant="destructive" className="w-full">
            <AlertCircleIcon />
            <AlertTitle>{e.field}</AlertTitle>
            <AlertDescription>{e.message}</AlertDescription>
          </Alert>
        ))}
      </>
    );
  }

  if (data?.data) {
    return data?.data.map((c) => {
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

          <div className="px-2 py-1 border border-secondary rounded-md">
            <Drawer>
              <DrawerTrigger asChild>
                <EllipsisVertical className="size-5 shrink-0 cursor-pointer text-secondary-foreground" />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="font-bold text-2xl text-left uppercase">
                    Chức năng
                  </DrawerTitle>
                  <DrawerDescription className="font-medium text-left">
                    Thao tác danh mục
                  </DrawerDescription>
                </DrawerHeader>

                <div className="flex flex-col w-full px-3 gap-2">
                  <div className="bg-info/20 text-info-foreground rounded-xl border border-info/30 p-2 flex items-center gap-2">
                    <div className="size-8 bg-white rounded-md flex items-center justify-center">
                      <Pencil className="size-5 shrink-0 text-info" />
                    </div>
                    <span className=" text-info font-medium text-base whitespace-nowrap">
                      Sửa danh mục
                    </span>
                  </div>

                  <div className="bg-warning/20 text-info-foreground rounded-xl border border-warning/30 p-2 flex items-center gap-2">
                    {c.isActive ? (
                      <>
                        <div className="size-8 bg-white rounded-md flex items-center justify-center">
                          <EyeOff className="size-5 shrink-0 text-warning" />
                        </div>
                        <span className=" text-warning font-medium text-base whitespace-nowrap">
                          Ẩn danh mục
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="size-8 bg-white rounded-md flex items-center justify-center">
                          <Eye className="size-5 shrink-0 text-info" />
                        </div>
                        <span className=" text-warning font-medium text-base whitespace-nowrap">
                          Hiển thị danh mục
                        </span>
                      </>
                    )}
                  </div>

                  <div className="bg-destructive/20 text-destructive-foreground rounded-xl border border-destructive/30 p-2 flex items-center gap-2">
                    <div className="size-8 bg-white rounded-md flex items-center justify-center">
                      <Trash className="size-5 shrink-0 text-destructive" />
                    </div>
                    <span className="text-destructive font-medium text-base whitespace-nowrap">
                      Xoá danh mục
                    </span>
                  </div>
                </div>

                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button className="rounded-xl" variant="secondary">
                      Thoát
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      );
    });
  } else {
    return <CategoryListEmpty />;
  }
}
