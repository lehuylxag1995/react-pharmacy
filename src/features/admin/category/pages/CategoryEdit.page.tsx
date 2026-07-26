import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { toastMobile } from "@/components/ui/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { ListCheck, Undo2 } from "lucide-react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { CategorySelectItemRecursive } from "../components/CategorySelectRecursive";
import {
  useCategory,
  useCategorySelect,
  useUpdateCategory,
} from "../hooks/category.hook";
import {
  UpdateCategorySchema,
  type UpdateCategoryType,
} from "../schemas/category.schema";

export default function CategoryEditPage() {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const { data: Category } = useCategory(Number(id));
  const { data: CategoriesSelect } = useCategorySelect();
  const navigate = useNavigate();
  const { mutate } = useUpdateCategory(id);

  const { control, handleSubmit } = useForm({
    values: {
      name: Category?.data.name ?? "",
      description: Category?.data.description ?? "",
      parentId: Category?.data.parentId?.toString() ?? "root",
      isActive: Category?.data.isActive ?? true,
      sortOrder: Category?.data.sortOrder ?? 0,
      metaTitle: Category?.data.metaTitle ?? "",
      metaDescription: Category?.data.metaDescription ?? "",
    },
    resetOptions: {
      keepDirtyValues: true, // (Tuỳ chọn) Giữ nguyên những gì user đã nhập nếu react query auto refetch
    },
    resolver: zodResolver(UpdateCategorySchema),
  });

  const onSubmit: SubmitHandler<UpdateCategoryType> = async (data) => {
    mutate(data, {
      onSuccess: (result) => {
        if (result.success)
          toastMobile.success("Thông báo", "Cập nhật danh mục thành công");
      },
      onError: (result) => {
        toastMobile.error("Thông báo", result.error.message);
      },
    });
  };

  return (
    <div className="bg-card text-card-foreground ">
      <div className="px-4 py-3">
        <h3 className=" text-primary text-xl font-bold mb-3">
          Cập nhật danh mục
        </h3>

        <div className="flex flex-col">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel
                        className="font-semibold"
                        htmlFor="form_category_update_name"
                      >
                        Tên danh mục
                      </FieldLabel>
                      <Input
                        {...field}
                        id="form_category_update_name"
                        type="text"
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  );
                }}
              />

              <Controller
                name="parentId"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel
                        className="font-semibold"
                        htmlFor="form_category_update_select_parent"
                      >
                        Danh mục cha
                      </FieldLabel>
                      <Select
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          id="form_category_update_select_parent"
                          aria-invalid={fieldState.invalid}
                          className="w-full"
                        >
                          <SelectValue placeholder="Chọn danh mục cha" />
                        </SelectTrigger>
                        <SelectContent position="item-aligned">
                          <SelectGroup>
                            <SelectItem value="root">Thư mục cha</SelectItem>
                            {CategoriesSelect?.data && (
                              <CategorySelectItemRecursive
                                categoriesSelect={CategoriesSelect?.data}
                                char=""
                                parentId={null}
                                excludeId={Category?.data.id}
                              />
                            )}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  );
                }}
              />

              <Controller
                control={control}
                name="sortOrder"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form_category_update_sortOrder">
                      Thứ tự
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form_category_update_sortOrder"
                      type="number"
                      aria-invalid={fieldState.invalid}
                      placeholder="Ví dụ: 0, 1, 2, 3,..."
                      min={1}
                      onChange={(e) => {
                        const value = e.target.value;

                        field.onChange(
                          value === "" ? undefined : e.target.valueAsNumber,
                        );
                      }}
                    />
                    <FieldDescription>
                      Số nhỏ hơn sẽ được ưu tiên hiển thị trước.
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <Field>
                    <FieldLabel
                      className="font-semibold"
                      htmlFor="form_category_update_description"
                    >
                      Mô tả
                    </FieldLabel>
                    <div className="relative">
                      <Textarea
                        {...field}
                        id="form_category_update_description"
                        placeholder="Mô tả về danh mục..."
                        className="w-full min-h-30 "
                        maxLength={255}
                      />
                      <div className="absolute bottom-0 right-3 text-muted-foreground text-sm">
                        {field.value.length}/255
                      </div>
                    </div>
                  </Field>
                )}
              />

              <Controller
                name="metaTitle"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel
                        className="font-semibold"
                        htmlFor="form_category_update_meta_title"
                      >
                        Tên danh mục quảng cáo (SEO)
                      </FieldLabel>
                      <Input
                        {...field}
                        id="form_category_update_meta_title"
                        type="text"
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  );
                }}
              />

              <Controller
                name="metaDescription"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel
                        className="font-semibold"
                        htmlFor="form_category_update_meta_description"
                      >
                        Mô tả danh mục quảng cáo (SEO)
                      </FieldLabel>
                      <Input
                        {...field}
                        id="form_category_update_meta_description"
                        type="text"
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  );
                }}
              />

              <Controller
                name="isActive"
                control={control}
                render={({ field }) => (
                  <Field orientation={"horizontal"}>
                    <FieldContent>
                      <FieldLabel
                        className="font-semibold"
                        htmlFor="form_category_update_is_active"
                      >
                        Trạng thái
                      </FieldLabel>
                      <FieldDescription>
                        Danh mục hiển thị trên website ?
                      </FieldDescription>
                    </FieldContent>
                    <Switch
                      id="form_category_update_is_active"
                      name={field.name}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </Field>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex-1">
                  <Button
                    className="w-full font-semibold hover:bg-accent hover:text-accent-foreground"
                    type="submit"
                  >
                    <ListCheck className="size-5" />
                    <span>Cập nhật danh mục</span>
                  </Button>
                </div>
                <div className="flex-1">
                  <Button
                    className="w-full font-semibold hover:bg-accent hover:text-accent-foreground"
                    variant={"secondary"}
                    type="button"
                    onClick={() => navigate("/admin/categories")}
                  >
                    <Undo2 className="size-5" />
                    <span>Quay lại</span>
                  </Button>
                </div>
              </div>
            </FieldGroup>
          </form>
        </div>
      </div>
    </div>
  );
}
