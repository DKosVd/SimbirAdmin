import { categoryId } from "../category/category";
import { thumbnail } from "../thumbnail/thumbnail";

export interface Car {
  name: string;
  description: string;
  categoryId: categoryId;
  priceMax: number;
  thumbnail: thumbnail;
  priceMin: number;
  number: string;
  tank: number;
  colors: string[];
  id: string;
}

export interface ICarProps {
  page?: number;
  offset?: number;
  limit?: number;
  categoryId?: string;
}
