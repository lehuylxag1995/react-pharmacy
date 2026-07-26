import z from "zod";

export const CreateCategorySchema = z.object({
  parentId: z.string().min(1, "Bạn chưa chọn danh mục cha"),
  name: z.string().min(1, "Tên không được để trống").toLowerCase().trim(),
  description: z.string().trim(),
  isActive: z.boolean(),
});

export const UpdateCategorySchema = CreateCategorySchema.extend({
  sortOrder: z
    .number("Phải là kiểu số")
    .int("Phải là kiểu số nguyên")
    .gte(0, "thứ tự phải >= 0"),

  metaTitle: z.string().min(1, "Bạn chưa nhập tiêu đề quảng cáo"),
  metaDescription: z.string().min(1, "Bạn chưa nhập mô tả quảng cáo"),
});

export type CreateCategoryType = z.infer<typeof CreateCategorySchema>;
export type UpdateCategoryType = z.infer<typeof UpdateCategorySchema>;
