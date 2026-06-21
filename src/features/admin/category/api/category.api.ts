import { axiosClient } from "@/configs/axios.config";
import type { ICategoryListItem } from "@/interfaces/category.interface";
import type { ApiSuccess } from "@/types/backend.type";

export const categoryApi = {
  // Trả về danh sách danh mục với id
  getCategories: async ({ id }: { id?: number }) => {
    const response = await axiosClient.get<ApiSuccess<ICategoryListItem[]>>(
      `/categories?id=${id}`,
    );
    return response.data;
  },

  // Trả về một danh mục theo ID
  getCategoryById: async (id: number) => {
    const response = await axiosClient.get(`/categories/${id}`);
    return response.data;
  },
};
