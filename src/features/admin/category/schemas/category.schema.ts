import z from "zod";

// Them moi
export const CreateCategorySchema = z.object({
  parentId: z.string(),
  name: z.string().min(1, "Bạn chưa nhập tên danh mục").toLowerCase().trim(),
  description: z.string().trim(),
  isActive: z.boolean(),
});
export type CreateCategoryType = z.infer<typeof CreateCategorySchema>;
