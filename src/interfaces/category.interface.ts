export interface ICategory {
  id: number;
  parentId: number | null;
  name: string;
  slug: string;
  description?: string | null;
  sortOrder: number;
  isActive: boolean;
  metaTitle?: string | null;
  metaDescription?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICategoryListItem {
  id: number;
  parentId: number | null;
  name: string;
  isActive: boolean;
  childrenCount: number;
}

export interface IGetCategoryQueries {
  id?: number;
  search?: string;
  status?: number;
  sortBy?: number;
}

export interface ICategorySelect extends Pick<
  ICategory,
  "id" | "name" | "parentId" | "slug" | "description" | "sortOrder" | "isActive"
> {}
