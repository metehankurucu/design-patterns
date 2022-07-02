import { Product } from "./Product";
import { User } from "./User";

export class RealProduct implements Product {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  deliver = (user: User) => {
    console.log(
      `${user.name} has received ${this.name} (Real Product) by courier (${user.address}).`
    );
  };
}
