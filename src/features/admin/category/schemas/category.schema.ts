import z from "zod";

// Chi tiet
export const CategorySchema = z.object({
  id: z.number(),
  parentId: z.number().nullable(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable(),
  sortOrder: z.number(),
  isActive: z.boolean(),
});

export type CategoryType = z.infer<typeof CategorySchema>;

// Them moi
export const CreateCategorySchema = z.object({
  parentId: z.string(),
  name: z.string().min(1, "Bạn chưa nhập tên danh mục").toLowerCase().trim(),
  description: z.string().trim(),
  isActive: z.boolean(),
});
export type CreateCategoryType = z.infer<typeof CreateCategorySchema>;
export type CreateCategoryTypeResponse = CategoryType & {
  parentName: string;
  createdAt: string;
};
