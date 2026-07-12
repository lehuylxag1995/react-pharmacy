import { axiosClient } from "@/configs/axios.config";
import type {
  ICategoryListItem,
  ICategoryPublic,
  ICategoryWithParentName,
  IGetCategoryQueries,
} from "@/features/admin/category/interfaces/category.interface";
import type { ApiSuccess } from "@/types/backend.type";
import type { CreateCategoryType } from "../schemas/category.schema";

export const categoryApi = {
  // Trả về danh sách danh mục với các queries
  getList: async (queries: IGetCategoryQueries) => {
    const response = await axiosClient.get<ApiSuccess<ICategoryListItem[]>>(
      `/categories`,
      { params: queries },
    );
    return response.data;
  },

  // Trả về một danh mục theo ID
  getById: async (id: number) => {
    const response = await axiosClient.get<ApiSuccess<ICategoryPublic>>(
      `/categories/${id}`,
    );
    return response.data;
  },

  getAll: async () => {
    const response =
      await axiosClient.get<ApiSuccess<ICategoryPublic[]>>(`/categories/all`);
    return response.data;
  },

  create: async (data: CreateCategoryType) => {
    const response = await axiosClient.post<
      ApiSuccess<ICategoryWithParentName>
    >(`/categories`, data);
    return response.data;
  },
};
