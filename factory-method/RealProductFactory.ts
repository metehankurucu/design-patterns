import { Product } from "./Product";
import { ProductFactory } from "./ProductFactory";
import { RealProduct } from "./RealProduct";

export class RealProductFactory implements ProductFactory {
  createProduct(name: string): Product {
    return new RealProduct(name);
  }
}
