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
import { EllipsisVertical, Pencil, Trash, Undo2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useCategoryDeleteStore } from "../stores/category-delete.store";

export default function CategoryListMobileActions({ id }: { id: number }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDialogDelete = useCategoryDeleteStore((state) => state.openDialog);

  const handleDeleteClick = () => {
    setDrawerOpen(false);

    setTimeout(() => {
      openDialogDelete(id);
    }, 300);
  };

  return (
    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
      <DrawerTrigger asChild>
        <div className="p-2 border border-secondary rounded-md cursor-pointer">
          <EllipsisVertical className="size-5 shrink-0 text-secondary-foreground" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="font-bold text-xl text-left uppercase text-primary">
            Chức năng
          </DrawerTitle>
          <DrawerDescription className="font-medium text-left">
            Thao tác danh mục
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-col w-full px-4 gap-2">
          <Link to={`/admin/categories/${id}/edit`}>
            <Button className="bg-info/10 text-info-foreground w-full border border-info/50 hover:bg-info/20 hover:text-info">
              <Pencil className="size-5 shrink-0 text-info" />
              <span className="text-info">Sửa danh mục</span>
            </Button>
          </Link>

          <Button
            variant={"destructive"}
            className="border border-destructive/30"
            onClick={handleDeleteClick}
          >
            <Trash className="size-5 shrink-0 text-destructive" />
            <span className="text-destructive ">Xoá danh mục</span>
          </Button>
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button
              className="border border-muted-foreground/30"
              variant="secondary"
            >
              <Undo2 className="size-5 shrink-0 text-secondary-foreground" />
              <span className="text-secondary-foreground ">Thoát</span>
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
