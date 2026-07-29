import { axiosClient } from "@/configs/axios.config";
import type {
  ICategoryInfoDelete,
  ICategoryListItem,
  ICategoryPublic,
  ICategoryWithParentName,
  IGetCategoryQueries,
} from "@/features/admin/category/interfaces/category.interface";
import type { ApiSuccess } from "@/types/backend.type";
import type {
  CreateCategoryType,
  UpdateCategoryType,
} from "../schemas/category.schema";

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
  getById: async (id: number | null) => {
    const response = await axiosClient.get<ApiSuccess<ICategoryPublic>>(
      `/categories/${id}`,
    );
    return response.data;
  },

  getInfoDeteleById: async (id: number | null) => {
    const response = await axiosClient.get<ApiSuccess<ICategoryInfoDelete>>(
      `/categories/${id}/info-delete`,
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

  update: async (id: number, data: UpdateCategoryType) => {
    const response = await axiosClient.put<ApiSuccess<ICategoryWithParentName>>(
      `/categories/${id}`,
      data,
    );
    return response.data;
  },
};
