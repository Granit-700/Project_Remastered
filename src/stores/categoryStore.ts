import { create } from "zustand";
import type { Category, MainPageResponse } from "../types/mainPage/mainPage";
import { api } from "./api";

interface State {
  categories: Category[];
  selectedCategory: Category | null;
  getCategories: () => Promise<void>;
  setSelectedCategory: (isSelectCategory: Category) => void,
};

type Categories = Pick<MainPageResponse, "categories">;

export const useCategoryStore = create<State>((set) => {
  return {
    categories: [],
    selectedCategory: null,
    getCategories: async () => {
      try {
        const { data: { categories } } = await api.get<Categories>(
          "https://erjanhoo.pythonanywhere.com/api/product/main_page"
        );
        console.log(categories);
        set({
          categories: categories,
          selectedCategory: categories[0],
        });
      } catch (e: any) {
        console.error(e?.message || e);
      }
    },
    setSelectedCategory: (isSelectCategory: Category) => {
      set({ selectedCategory: isSelectCategory });
    },
  };
});

export const useCategories = () => useCategoryStore((store) => store.categories);
export const useSelectedCategory = () => useCategoryStore((store) => store.selectedCategory);

export const useGetCategories = () => useCategoryStore((store) => store.getCategories);
export const useSetSelectedCategory = () => useCategoryStore((store) => store.setSelectedCategory);
