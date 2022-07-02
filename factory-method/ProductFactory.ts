import { Product } from "./Product";

export interface ProductFactory {
  createProduct(name: string): Product;
}
