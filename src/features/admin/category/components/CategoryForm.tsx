import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { ApiError } from "@/types/backend.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  CreateCategorySchema,
  type CreateCategoryType,
} from "../schemas/category.schema";
import { CategorySelectItemRecursive } from "./CategorySelectRecursive";

interface ICategoryFormProps {
  initialValues?: CreateCategoryType;
  onSubmit: (data: CreateCategoryType) => void;
  categories?: any[];
  isLoadingCategories?: boolean;
  onCancel: () => void;
  submitText: string;
  apiError?: ApiError | null;
}

export default function CategoryForm({
  onCancel,
  onSubmit,
  submitText,
  categories,
  initialValues,
  isLoadingCategories,
  apiError,
}: ICategoryFormProps) {
  const form = useForm<CreateCategoryType>({
    resolver: zodResolver(CreateCategorySchema),
    defaultValues: initialValues || {
      parentId: "root",
      name: "",
      description: "",
      isActive: true,
    },
  });

  //theo dõi lỗi từ component cha
  useEffect(() => {
    if (apiError) {
      form.setError("name", { message: apiError.error.message });
    }
  }, [form, apiError]);

  return (
    <form className="capitalize" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <span className="text-foreground font-bold text-xl">
          Thông tin danh mục
        </span>

        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => {
            return (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>
                  Tên danh mục <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  aria-invalid={fieldState.invalid}
                  className="text-foreground"
                  placeholder="Nhập tên danh mục"
                  onChange={(e) => {
                    field.onChange(e);
                    if (fieldState.invalid) form.clearErrors("name");
                  }}
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
          control={form.control}
          render={({ field }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Danh mục cha</FieldLabel>
              <Select
                name={field.name}
                value={field.value?.toString()}
                onValueChange={(val) =>
                  field.onChange(val === "root" ? null : val)
                }
              >
                <SelectTrigger className="text-foreground" id={field.name}>
                  <SelectValue placeholder="Chọn danh mục cha" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="root">Thư mục cha</SelectItem>
                  {isLoadingCategories && (
                    <div className="p-2 text-sm text-muted-foreground">
                      Đang tải...
                    </div>
                  )}

                  {!isLoadingCategories && categories && (
                    <CategorySelectItemRecursive
                      categories={categories}
                      char=""
                      parentId={null}
                    />
                  )}
                </SelectContent>
              </Select>
            </Field>
          )}
        />

        <Controller
          name="description"
          control={form.control}
          render={({ field }) => {
            return (
              <Field>
                <FieldLabel htmlFor={field.name}>Mô tả</FieldLabel>
                <div className="relative">
                  <Textarea
                    {...field}
                    id={field.name}
                    maxLength={255}
                    className="min-h-20 px-3 pb-8 text-foreground"
                    placeholder="Nhập mô tả danh mục (không bắt buộc)"
                  />

                  <div className="absolute bottom-2 right-3 text-xs text-muted-foreground pointer-events-none select-none">
                    {(field.value ?? "").length}/255
                  </div>
                </div>
              </Field>
            );
          }}
        />

        <Controller
          name="isActive"
          control={form.control}
          render={({ field }) => {
            return (
              <Field>
                <FieldLabel>Trạng thái</FieldLabel>
                <RadioGroup
                  name={field.name}
                  value={field.value ? "true" : "false"}
                  onValueChange={(val) => field.onChange(val === "true")}
                  className="flex"
                >
                  <Field orientation={"horizontal"}>
                    <RadioGroupItem value="true" id={`${field.name}-active`} />
                    <FieldLabel
                      className="text-foreground"
                      htmlFor={`${field.name}-active`}
                    >
                      Hiển thị
                    </FieldLabel>
                  </Field>

                  <Field orientation={"horizontal"}>
                    <RadioGroupItem
                      value="false"
                      id={`${field.name}-inactive`}
                    />
                    <FieldLabel
                      className="text-foreground"
                      htmlFor={`${field.name}-inactive`}
                    >
                      Ẩn
                    </FieldLabel>
                  </Field>
                </RadioGroup>
              </Field>
            );
          }}
        />

        <Field orientation="horizontal" className="grid grid-cols-2">
          <Button
            type="button"
            variant={"outline"}
            size={"lg"}
            onClick={onCancel}
          >
            Huỷ
          </Button>
          <Button size={"lg"} type="submit">
            {submitText}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
