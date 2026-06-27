import { axiosClient } from "@/configs/axios.config";
import type {
  ICategoryListItem,
  IGetCategoriesParams,
} from "@/interfaces/category.interface";
import type { ApiSuccess } from "@/types/backend.type";

export const categoryApi = {
  // Trả về danh sách danh mục với id
  getCategories: async (params: IGetCategoriesParams) => {
    const response = await axiosClient.get<ApiSuccess<ICategoryListItem[]>>(
      `/categories`,
      { params },
    );
    return response.data;
  },

  // Trả về một danh mục theo ID
  getCategoryById: async (id: number) => {
    const response = await axiosClient.get(`/categories/${id}`);
    return response.data;
  },
};
