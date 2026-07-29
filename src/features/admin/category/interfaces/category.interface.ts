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

export interface ICategoryPublic extends Pick<
  ICategory,
  | "id"
  | "description"
  | "isActive"
  | "name"
  | "parentId"
  | "slug"
  | "sortOrder"
  | "metaTitle"
  | "metaDescription"
> {}

export interface ICategoryWithParentName extends ICategoryPublic {
  parentName: string;
  createdAt: Date;
}

export interface ICategoryListItem extends Pick<
  ICategory,
  "id" | "parentId" | "name" | "isActive"
> {
  childrenCount: number;
}

export interface IGetCategoryQueries {
  id?: number;
  name?: string;
  status?: number;
  sortBy?: number;
}

export interface ICategorySelect extends Pick<
  ICategory,
  "id" | "parentId" | "name"
> {}

export interface ICategoryInfoDelete extends Pick<
  ICategory,
  "id" | "name" | "isActive"
> {
  parentName: string | null;
  countProducts: number;
  countCategories: number;
}
