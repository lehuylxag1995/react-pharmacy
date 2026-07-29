import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useCategoryDeleteStore = create(
  // Dùng combine để clean code
  combine(
    {
      categoryId: null as number | null,
      isOpenDialog: false,
    },
    (set) => ({
      openDialog: (id: number) => set({ categoryId: id, isOpenDialog: true }),
      closeDialog: () => set({ categoryId: null, isOpenDialog: false }),
    }),
  ),
);
