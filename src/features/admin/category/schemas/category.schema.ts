import z from "zod";

// Chi tiet
export const CategorySchema = z.object({
  id: z.number(),
  parentId: z.number().nullable(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable(),
  iconUrl: z.string().nullable(),
  imageUrl: z.string().nullable(),
  sortOrder: z.number(),
  isActive: z.boolean(),
});

export type CategoryType = z.infer<typeof CategorySchema>;
