import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
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
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import z from "zod";
import CategoryHeader from "../components/CategoryHeader";

const formCreateCategory = z.object({
  parentId: z.number().nullable(),
  name: z.string().min(1, "Bạn chưa nhập tên danh mục").toLowerCase().trim(),
  description: z.string().trim(),
  iconUrl: z.string().trim(),
  imageUrl: z.string().trim(),
  sortOrder: z
    .number("Dữ liệu phải là kiểu số")
    .min(0, "Thứ tự hiển thị luôn là số dương"),
  isActive: z.boolean(),
});

type CategoryForm = z.infer<typeof formCreateCategory>;

export default function CategoryAddPage() {
  const navigate = useNavigate();

  function onSubmit(data: CategoryForm) {
    // Chuyển trang
    navigate("/admin/category/add/success");
    console.log(data);
  }

  const form = useForm<CategoryForm>({
    resolver: zodResolver(formCreateCategory),
    defaultValues: {
      parentId: null,
      name: "",
      description: "",
      iconUrl: "",
      imageUrl: "",
      sortOrder: 0,
      isActive: true,
    },
  });

  return (
    <>
      <CategoryHeader route="/admin/categories" />

      <hr />

      <div className="px-4 py-3 flex flex-col bg-card text-foreground">
        <form
          className="capitalize text-muted-foreground"
          onSubmit={form.handleSubmit(onSubmit)}
          id="form-rhf-category"
        >
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
                      <SelectItem value="root">Không có thư mục cha</SelectItem>
                      <SelectItem value="1">thuoc</SelectItem>
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
                        <RadioGroupItem
                          value="true"
                          id={`${field.name}-active`}
                        />
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

            <FieldSeparator className="py-2" />

            <span className="text-foreground font-bold text-xl">
              thông tin khác
            </span>

            <Controller
              name="sortOrder"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Thứ tự hiển thị</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    type="number"
                    placeholder="Nhập thứ tự (số)"
                    className="text-foreground"
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                  <FieldDescription>Số nhỏ hiển thị trước</FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Field orientation="horizontal" className="grid grid-cols-2">
              <Button
                type="button"
                variant={"outline"}
                size={"lg"}
                onClick={() => form.reset()}
              >
                Huỷ
              </Button>
              <Button size={"lg"} type="submit" form="form-rhf-category">
                Lưu danh mục
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </>
  );
}
