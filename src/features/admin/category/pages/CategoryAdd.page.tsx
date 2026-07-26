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
import { zodResolver } from "@hookform/resolvers/zod";
import { ListCheck, ListRestart, Undo2 } from "lucide-react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { CategorySelectItemRecursive } from "../components/CategorySelectRecursive";
import { useCategorySelect, useCreateCategory } from "../hooks/category.hook";
import {
  CreateCategorySchema,
  type CreateCategoryType,
} from "../schemas/category.schema";
export default function CategoryAddPage() {
  const { data: CategoriesSelect } = useCategorySelect();
  const { mutate } = useCreateCategory();
  const navigation = useNavigate();

  const { control, handleSubmit, reset, setError } =
    useForm<CreateCategoryType>({
      defaultValues: {
        name: "",
        parentId: "",
        description: "",
        isActive: true,
      },
      resolver: zodResolver(CreateCategorySchema),
    });

  const onSubmit: SubmitHandler<CreateCategoryType> = async (data) => {
    mutate(data, {
      onSuccess: (result) => {
        if (result.success) {
          reset();
          navigation("/admin/categories/add/success", {
            state: { newCategory: result.data },
          });
        }
      },
      onError: (result) => {
        if (result.error.code === "CATEGORY_NAME_EXIST") {
          setError("name", { message: result.error.message, type: "server" });
        }
      },
    });
  };

  return (
    <div className="bg-card text-card-foreground ">
      <div className="px-4 py-3">
        <h3 className=" text-primary text-xl font-bold mb-3">
          Thêm mới danh mục
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
                      <FieldLabel htmlFor="form_category_name">
                        Tên danh mục
                      </FieldLabel>
                      <Input
                        {...field}
                        id="form_category_name"
                        type="text"
                        aria-invalid={fieldState.invalid}
                        placeholder="Tên danh mục"
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
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form_category_select_parent">
                      Danh mục cha
                    </FieldLabel>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger
                        id="form_category_select_parent"
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
                            />
                          )}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
                    <FieldLabel htmlFor="form_category_description">
                      Mô tả
                    </FieldLabel>
                    <div className="relative">
                      <Textarea
                        {...field}
                        placeholder="Mô tả về danh mục..."
                        className="w-full min-h-30 "
                        id="form_category_description"
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
                name="isActive"
                control={control}
                render={({ field }) => (
                  <Field orientation={"horizontal"}>
                    <FieldContent>
                      <FieldLabel htmlFor="form_category_is_active">
                        Trạng thái
                      </FieldLabel>
                      <FieldDescription>
                        Danh mục hiển thị trên website ?
                      </FieldDescription>
                    </FieldContent>
                    <Switch
                      id="form_category_is_active"
                      name={field.name}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </Field>
                )}
              />

              <div className="flex flex-col gap-2">
                <div className="flex-1">
                  <Button
                    className="w-full hover:bg-accent hover:text-accent-foreground"
                    type="submit"
                  >
                    <ListCheck className="size-5" />
                    <span>Thêm danh mục</span>
                  </Button>
                </div>
                <div className="flex-1">
                  <Button
                    variant={"secondary"}
                    className="w-full hover:bg-accent hover:text-accent-foreground"
                    type="button"
                    onClick={() => reset()}
                  >
                    <ListRestart className="size-5" />
                    <span> Đặt lại</span>
                  </Button>
                </div>
                <div className="flex-1">
                  <Button
                    variant={"secondary"}
                    className="w-full hover:bg-accent hover:text-accent-foreground"
                    type="button"
                    onClick={() => navigation("/admin/categories")}
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
