import type { Product } from "../mainPage/mainPage";

// Requests

export type ProductDetailsRequest = Pick<Product, "id">;

// Responses

export type ProductDetailsResponse = Omit<
  Product,
  "original_price" | "discounted_price" | "category" | "rating"
> & {
  original_price: string;
  discounted_price: string;
  category: number;
  rating: string;
  description: string;
  ingredients: string;
};
