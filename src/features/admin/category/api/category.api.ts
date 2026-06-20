import { axiosClient } from "@/configs/axios.config";
import {
  CategoryListResponseSchema,
  type CategoryListItemType,
  type CategoryListResponseType,
} from "../schema/category.schema";

export const categoryApi = {
  // Trả về danh sách danh mục với id
  getCategories: async ({
    id,
  }: {
    id: number | null;
  }): Promise<CategoryListItemType[]> => {
    const response = await axiosClient.get<CategoryListResponseType>(
      `/categories?id=${id}`,
    );
    const result = await CategoryListResponseSchema.parseAsync(response.data);

    return result.data;
  },

  // Trả về một danh mục theo ID
  // getCategoryById: async ({ id }: { id: number }) => {
  //   const response = await axiosClient.get(`/categories/${id}`);
  //   const data = CategorySchema.parse(response.data);
  //   return data;
  // },
};
