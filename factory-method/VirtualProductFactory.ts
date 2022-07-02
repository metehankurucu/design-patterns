import { Product } from "./Product";
import { ProductFactory } from "./ProductFactory";
import { VirtualProduct } from "./VirtualProduct";

export class VirtualProductFactory implements ProductFactory {
  createProduct(name: string): Product {
    const accessCode = Math.floor(Math.random() * 1000000);
    return new VirtualProduct(name, accessCode.toString());
  }
}
