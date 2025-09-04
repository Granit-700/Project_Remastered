import { create } from "zustand";
import type { Category, MainPageResponse } from "../types";
import axios from "axios";

interface State {
  categories: Category[];
  getCategories: () => Promise<void>;
};

type Categories = Pick<MainPageResponse, "categories">;

export const useCategoryStore = create<State>((set) => {
  return {
    categories: [],
    getCategories: async () => {
      try {
        const { data: {categories} } = await axios.get<Categories>(
          "https://erjanhoo.pythonanywhere.com/api/product/main_page"
        );
        console.log(categories);
        set({ categories: categories });
      } catch (e: any) {
        console.error(e?.message || e);
      }
    },
  };
});

export const useCategories = () => useCategoryStore((store) => store.categories);

export const useGetCategories = () => useCategoryStore((store) => store.getCategories);
