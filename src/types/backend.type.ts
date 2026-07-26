export type ApiError = {
  success: false;
  error: {
    code: string;
    message: string;
    details?: {
      field: string;
      message: string;
    }[];
  };
};

export type ApiSuccess<T> = {
  success: true;
  data: T;
  meta?: PaginationMeta;
};

type PaginationMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};
