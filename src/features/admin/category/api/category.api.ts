import { axiosClient } from "@/configs/axios.config";
import type {
  ICategoryListItem,
  ICategorySelect,
  IGetCategoryQueries,
} from "@/interfaces/category.interface";
import type { ApiSuccess } from "@/types/backend.type";
import type {
  CreateCategoryType,
  CreateCategoryTypeResponse,
} from "../schemas/category.schema";

export const categoryApi = {
  // Trả về danh sách danh mục với các queries
  getCategoryWithQuery: async (queries: IGetCategoryQueries) => {
    const response = await axiosClient.get<ApiSuccess<ICategoryListItem[]>>(
      `/categories`,
      { params: queries },
    );
    return response.data;
  },

  // Trả về một danh mục theo ID
  getCategoryById: async (id: number) => {
    const response = await axiosClient.get(`/categories/${id}`);
    return response.data;
  },

  getCategories: async () => {
    const response =
      await axiosClient.get<ApiSuccess<ICategorySelect[]>>(`/categories/all`);
    return response.data;
  },

  createCategory: async (data: CreateCategoryType) => {
    const response = await axiosClient.post<
      ApiSuccess<CreateCategoryTypeResponse>
    >(`/categories`, data);
    return response.data;
  },
};
