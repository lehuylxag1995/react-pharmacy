import z from "zod";

// Chi tiet
// export const CategorySchema = z.object({
//   id: z.number(),
//   parentId: z.number().nullable(),
//   name: z.string(),
//   slug: z.string(),
//   description: z.string(),
//   iconUrl: z.string(),
//   imageUrl: z.string(),
//   sortOrder: z.number(),
//   isActive: z.boolean(),
// });
// export type CategoryType = z.infer<typeof CategorySchema>;

export const CategoryListItemSchema = z.object({
  id: z.number(),
  parentId: z.number().nullable(),
  name: z.string(),
  iconUrl: z.string().nullable(),
  isActive: z.boolean(),
  childrenCount: z.number(),
});
export type CategoryListItemType = z.infer<typeof CategoryListItemSchema>;

export const CategoryListResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(CategoryListItemSchema),
});

export type CategoryListResponseType = z.infer<
  typeof CategoryListResponseSchema
>;
