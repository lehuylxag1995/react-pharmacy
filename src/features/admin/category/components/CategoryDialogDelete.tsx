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
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Folder, Package, Trash2, TriangleAlert } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useShallow } from "zustand/react/shallow";
import {
  useCategoryInfoDelete,
  useCategorySelect,
} from "../hooks/category.hook";
import {
  DeleteInfoCategorySchema,
  type DeleteInfoCategoryType,
} from "../schemas/category.schema";
import { useCategoryDeleteStore } from "../stores/category-delete.store";
import { CategorySelectItemRecursive } from "./CategorySelectRecursive";

export default function CategoryDialogDelete() {
  const { isOpenDialog, closeDialog, categoryId } = useCategoryDeleteStore(
    // Dùng shallow để tránh re-render khi selector là object
    useShallow((state) => ({
      categoryId: state.categoryId,
      isOpenDialog: state.isOpenDialog,
      closeDialog: state.closeDialog,
    })),
  );

  const { data: Category } = useCategoryInfoDelete(categoryId);
  const { data: CategoriesSelect } = useCategorySelect();

  const form = useForm<DeleteInfoCategoryType>({
    resolver: zodResolver(DeleteInfoCategorySchema),
    defaultValues: {
      method: "",
      targetCategoryId: "",
    },
  });

  const watchMethod = form.watch("method");

  function handleCloseDialog() {
    console.log(123);
    form.reset();
    closeDialog();
  }
  function onSubmit(data: DeleteInfoCategoryType) {
    console.log(data);
  }

  return (
    <Dialog open={isOpenDialog} onOpenChange={closeDialog}>
      <DialogContent
        showCloseButton={false}
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        onEscapeKeyDown={(e) => {
          e.preventDefault();
        }}
        onOpenAutoFocus={(e) => {
          e.preventDefault(); // chặn focus vào radio
        }}
      >
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

        <div className="flex flex-col gap-3 max-h-[50vh] overflow-y-auto no-scrollbar px-1">
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
                <p className="font-bold">{Category?.data.name}</p>
              </div>
              <div>
                <h3 className="text-muted-foreground font-medium">
                  Mã danh mục
                </h3>
                <p className="font-bold">{Category?.data.id}</p>
              </div>
              <div>
                <h3 className="text-muted-foreground font-medium">
                  Danh mục cha
                </h3>
                <p className="font-bold">
                  {Category?.data.parentName ?? "Danh mục gốc"}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-muted-foreground font-medium">
                  Trạng thái
                </h3>
                {Category?.data.isActive ? (
                  <Badge className="bg-primary/20 text-primary font-semibold">
                    Đang hoạt động
                  </Badge>
                ) : (
                  <Badge className="bg-destructive/20 text-destructive font-semibold">
                    Tạm ẩn
                  </Badge>
                )}
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
                <h1 className="font-bold">{Category?.data.countProducts}</h1>
                <span className="text-center text-muted-foreground">
                  Sản phẩm
                </span>
              </div>

              <div className="flex flex-1 md:basis-[calc(25%-0.5rem)] flex-col items-center gap-1 border p-2 rounded bg-secondary/50">
                <div className="bg-info/10 p-1 rounded size-fit">
                  <Package className="size-5 text-info" />
                </div>
                <h1 className="font-bold">{Category?.data.countCategories}</h1>
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
            <form
              id="form-category-delete-info"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FieldGroup>
                <Controller
                  control={form.control}
                  name="method"
                  render={({ field, fieldState }) => (
                    <FieldSet>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}

                      <RadioGroup
                        name={field.name}
                        value={field.value}
                        aria-invalid={fieldState.invalid}
                        onValueChange={(value) => {
                          field.onChange(value);

                          // khi chuyển sang radio 2 thì xoá giá trị + lỗi của select
                          if (value === "xoatatca") {
                            form.setValue("targetCategoryId", "");
                            form.clearErrors("targetCategoryId");
                          }
                        }}
                      >
                        <FieldLabel htmlFor="form-category-radiogroup-delete-info-1">
                          <Field
                            orientation={"horizontal"}
                            data-invalid={fieldState.invalid}
                          >
                            <RadioGroupItem
                              value="chuyendanhmuc"
                              id="form-category-radiogroup-delete-info-1"
                              aria-invalid={fieldState.invalid}
                            />

                            <FieldContent>
                              <FieldTitle>
                                Chuyển tất cả sang danh mục khác (khuyến nghị)
                              </FieldTitle>

                              <Controller
                                control={form.control}
                                name="targetCategoryId"
                                render={({ field, fieldState }) => (
                                  <>
                                    <Select
                                      name={field.name}
                                      value={field.value}
                                      onValueChange={field.onChange}
                                      disabled={watchMethod !== "chuyendanhmuc"}
                                    >
                                      <SelectTrigger
                                        id="form-category-select-method"
                                        aria-invalid={fieldState.invalid}
                                        className="w-full"
                                      >
                                        <SelectValue placeholder="Chọn danh mục đích"></SelectValue>
                                      </SelectTrigger>
                                      <SelectContent position="item-aligned">
                                        <SelectGroup>
                                          <SelectItem value="root">
                                            Thư mục cha
                                          </SelectItem>
                                          {CategoriesSelect &&
                                            categoryId !== null && (
                                              <CategorySelectItemRecursive
                                                char="--"
                                                parentId={null}
                                                categoriesSelect={
                                                  CategoriesSelect?.data
                                                }
                                                excludeId={categoryId}
                                              />
                                            )}
                                        </SelectGroup>
                                      </SelectContent>
                                    </Select>

                                    {fieldState.error && (
                                      <FieldError errors={[fieldState.error]} />
                                    )}
                                  </>
                                )}
                              />
                            </FieldContent>
                          </Field>
                        </FieldLabel>

                        <FieldLabel htmlFor="form-category-radiogroup-delete-info-2">
                          <Field
                            orientation={"horizontal"}
                            data-invalid={fieldState.invalid}
                          >
                            <RadioGroupItem
                              value="xoatatca"
                              id="form-category-radiogroup-delete-info-2"
                              aria-invalid={fieldState.invalid}
                            />
                            <FieldContent>
                              <FieldTitle>
                                Xoá danh mục và toàn bộ dữ liệu liên quan
                              </FieldTitle>

                              {watchMethod === "xoatatca" && (
                                <span className="flex gap-3 text-destructive bg-destructive/10 p-3 rounded ">
                                  <TriangleAlert className="size-5" />
                                  <div className="text-xs">
                                    <p className="font-bold">
                                      Hành động này không thể hoàn tác
                                    </p>
                                    <p className="text-pretty">
                                      Dữ liệu liên quan sẽ bị ảnh hưởng và không
                                      thể khôi phục
                                    </p>
                                  </div>
                                </span>
                              )}
                            </FieldContent>
                          </Field>
                        </FieldLabel>
                      </RadioGroup>
                    </FieldSet>
                  )}
                />
              </FieldGroup>
            </form>
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="secondary" onClick={handleCloseDialog}>
            Hủy
          </Button>
          <Button
            variant="destructive"
            type="submit"
            form="form-category-delete-info"
          >
            Xóa danh mục
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
