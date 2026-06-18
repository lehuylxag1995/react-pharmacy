import { axiosClient } from "@/configs/axios.config";

export interface ICategoryListItem {
  id: number;
  parentId: number | null;
  name: string;
  iconUrl?: string;
  isActive: boolean;
  childrenCount: number;
}

export interface ICategoryResponse {
  success: boolean;
  data: ICategoryListItem[];
}

export const categoryApi = {
  getAll: async (): Promise<ICategoryListItem[]> => {
    const response = await axiosClient.get<ICategoryResponse>("/categories");
    return response.data.data;
  },
};
