import { IPrice } from "./price";

export interface IItem {
  id: string;
  title: string;
  price: IPrice;
  picture?: string;
  condition?: string;
  free_shipping?: boolean;
  address?: string;
  sold_quantity?: number;
  description?: string;
}
