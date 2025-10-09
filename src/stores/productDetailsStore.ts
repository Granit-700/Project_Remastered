import { create } from "zustand";
import type { ProductDetailsResponse } from "../types/product/productDetails";
import { api } from "./api";

interface State {
  productDetails: ProductDetailsResponse | null;
  getProductDetails: (id: number) => Promise<void>
};

export const useProductDetailsStore = create<State>((set) => {
  return {
    productDetails: null,
    getProductDetails: async (id) => {
      try {
        const { data } = await api.get<ProductDetailsResponse>(
          `/api/product/products/${id}`
        );
        console.log(data);
        set({ productDetails: data });
      } catch (e: any) {
        console.error(e?.message || e);
      }
    },
  };
});

export const useProductDetails = () => useProductDetailsStore((store) => store.productDetails);

export const useGetProductDetails = () => useProductDetailsStore((store) => store.getProductDetails);
