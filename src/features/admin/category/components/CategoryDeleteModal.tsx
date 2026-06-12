import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2, TriangleAlert } from "lucide-react";
import { useState } from "react";

export default function CategoryDeleteModal() {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      // Giả lập gọi API mất 1 giây
      console.log("Đang gọi API xóa...");
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Xóa thành công!");

      // 3. Gọi API xong thì đóng Dialog lại
      setOpen(false);
    } catch (error) {
      console.error("Lỗi khi xóa", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="flex gap-2 text-destructive">
        <Trash2 />
        Xóa danh mục
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center text-pretty text-center gap-2">
          <div className="p-4 rounded-full text-destructive bg-destructive/10">
            <Trash2 className="size-8" />
          </div>
          <h2 className="text-xl font-bold">Xoá danh mục</h2>
          <h3 className="text-sm text-foreground px-5">
            Bạn có chắc chắn muốn xoá danh mục{" "}
            <span className="font-bold">"Thuốc cảm cúm"</span> ?
          </h3>
          <span className="flex items-center justify-center gap-2 text-xs font-bold text-destructive bg-destructive/10 p-3 rounded ">
            <TriangleAlert className="size-3" />
            <span>Hành động này không thể hoàn tác</span>
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <DialogClose asChild>
            <Button variant="outline" className="font-semibold">
              Hủy
            </Button>
          </DialogClose>

          <Button
            onClick={handleDelete}
            className="text-destructive-foreground bg-destructive font-semibold"
          >
            Xoá
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
