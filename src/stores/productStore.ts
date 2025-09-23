import { create } from "zustand";
import type { Product, MainPageResponse } from "../types/mainPage/mainPage";
import { api } from "./api";

interface State {
  products: Product[];
  getProducts: () => Promise<void>;
};

type Products = Pick<MainPageResponse, "products">

export const useProductStore = create<State>((set) => {
  return {
    products: [],
    getProducts: async () => {
      try {
        const { data: { products } } = await api.get<Products>(
          "/api/product/main_page"
        );
        console.log(products);
        set({ products: products });
      } catch (e: any) {
        console.error(e?.message || e);
      }
    },
  };
});

export const useProducts = () => useProductStore((store) => store.products);

export const useGetProducts = () => useProductStore((store) => store.getProducts);
