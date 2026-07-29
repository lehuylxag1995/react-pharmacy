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

export const DeleteInfoCategorySchema = z
  .object({
    method: z.enum(
      ["", "chuyendanhmuc", "xoatatca"],
      "Bạn chưa chọn cách xử lý dữ liệu liên quan",
    ),

    targetCategoryId: z.string().optional(),
  })
  .superRefine((val, ctx) => {
    // bắt buộc phải chọn 1 trong 2 phương án thật
    if (val.method === "") {
      ctx.addIssue({
        code: "custom",
        path: ["method"],
        message: "Vui lòng chọn một phương án",
      });
    }

    // nếu chọn "chuyển sang danh mục khác" thì bắt buộc chọn danh mục đích
    if (val.method === "chuyendanhmuc" && !val.targetCategoryId) {
      ctx.addIssue({
        code: "custom",
        path: ["targetCategoryId"], // lỗi sẽ gắn vào field này
        message: "Bạn chưa chọn danh mục đích!",
      });
    }
  });

export type DeleteInfoCategoryType = z.infer<typeof DeleteInfoCategorySchema>;
