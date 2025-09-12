import type { CartItem } from "../entities";

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  original_price: number;
  discounted_price: number;
  category: Category;
  rating: number;
  company: {
    id: number;
    name: string;
    logo: string;
  };
  grams: number;
}

export interface Cart {
  id: number;
  items: CartItem[];
  total_price: number;
}

export interface MainPageResponse {
  categories: Category[];
  products: Product[];
  cart: Cart[];
}
