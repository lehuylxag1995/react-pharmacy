import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  EllipsisVertical,
  Folder,
  Package,
  Pencil,
  Trash,
  Trash2,
  TriangleAlert,
  Undo2,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function CategoryListMobileActions({ id }: { id: number }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setDrawerOpen(false);
    setTimeout(() => setModalOpen(true), 300);
  };

  const handleConfirmDelete = () => {
    console.log(123);
    setModalOpen(false);
  };

  return (
    <>
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

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="bg-destructive/15 rounded p-2">
                <Trash2 className="size-5 text-destructive" />
              </div>
              <div>
                <DialogTitle>Xoá danh mục</DialogTitle>
                <DialogDescription>
                  Bạn đang xoá danh mục. Vui lòng kiểm tra thông tin bên dưới
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="flex flex-col gap-3 max-h-[50vh] overflow-y-auto no-scrollbar">
            {/* Cảnh báo */}
            <span className="flex gap-3 text-destructive bg-destructive/10 p-3 rounded ">
              <TriangleAlert className="size-5" />
              <div className="text-xs">
                <p className="font-bold">Hành động này không thể hoàn tác</p>
                <p className="text-pretty">
                  Dữ liệu liên quan sẽ bị ảnh hưởng và không thể khôi phục
                </p>
              </div>
            </span>

            {/* Thông tin danh mục */}
            <div className="flex gap-3 border rounded p-2">
              <div className="bg-warning/10 h-fit p-1 rounded">
                <Folder className="size-5 text-warning" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div>
                  <h3 className="text-muted-foreground font-medium">
                    Tên danh mục
                  </h3>
                  <p className="font-bold">Vitamin & Khoang chat</p>
                </div>
                <div>
                  <h3 className="text-muted-foreground font-medium">
                    Mã danh mục
                  </h3>
                  <p className="font-bold">Vitamin & Khoang chat</p>
                </div>
                <div>
                  <h3 className="text-muted-foreground font-medium">
                    Danh mục cha
                  </h3>
                  <p className="font-bold">----</p>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-muted-foreground font-medium">
                    Trạng thái
                  </h3>
                  <Badge className="bg-primary/20 text-primary font-semibold">
                    Dang hoat dong
                  </Badge>
                </div>
              </div>
            </div>

            {/* Dữ liệu liên quan */}
            <div className="flex flex-col gap-3">
              <h3 className="font-bold">Dữ liệu liên quan sẽ bị ảnh hưởng</h3>

              <div className="flex flex-wrap flex-col md:flex-row gap-2">
                <div className="flex flex-1 md:basis-[calc(25%-0.5rem)] flex-col items-center gap-1 border p-2 rounded bg-secondary/50">
                  <div className="bg-primary/10 p-1 rounded size-fit">
                    <Package className="size-5 text-primary" />
                  </div>
                  <h1 className="font-bold">12</h1>
                  <span className="text-center text-muted-foreground">
                    Sản phẩm
                  </span>
                </div>
                <div className="flex flex-1 md:basis-[calc(25%-0.5rem)] flex-col items-center gap-1 border p-2 rounded bg-secondary/50">
                  <div className="bg-info/10 p-1 rounded size-fit">
                    <Folder className="size-5 text-info" />
                  </div>
                  <h1 className="font-bold">12</h1>
                  <span className="text-center text-muted-foreground">
                    Danh mục con
                  </span>
                </div>
                <div className="flex flex-1 md:basis-[calc(25%-0.5rem)] flex-col items-center gap-1 border p-2 rounded bg-secondary/50">
                  <div className="bg-info/10 p-1 rounded size-fit">
                    <Folder className="size-5 text-info" />
                  </div>
                  <h1 className="font-bold">12</h1>
                  <span className="text-center text-muted-foreground">
                    Danh mục con
                  </span>
                </div>
                <div className="flex flex-1 md:basis-[calc(25%-0.5rem)] flex-col items-center gap-1 border p-2 rounded bg-secondary/50">
                  <div className="bg-info/10 p-1 rounded size-fit">
                    <Folder className="size-5 text-info" />
                  </div>
                  <h1 className="font-bold">12</h1>
                  <span className="text-center text-muted-foreground">
                    Danh mục con
                  </span>
                </div>
              </div>
            </div>

            {/* Xử lý dữ liệu liên quan */}
            <div className="flex flex-col gap-3">
              <h3 className="font-bold">
                Dữ liệu liên quan sẽ được xử lý thế nào ?
              </h3>
              <RadioGroup defaultValue="option-one">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">
                      Chuyển tất cả sang danh mục khác (khuyến nghị)
                    </Label>
                  </div>

                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Chọn danh mục đích"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="1">test</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-3">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">
                    Xoá danh mục và toàn bộ dữ liệu liên quan
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <DialogFooter>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Hủy
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete}>
              Xóa danh mục
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
