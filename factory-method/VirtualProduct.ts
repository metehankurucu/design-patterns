import { Product } from "./Product";
import { User } from "./User";

export class VirtualProduct implements Product {
  name: string;
  accessCode: string;

  constructor(name: string, accessCode: string) {
    this.name = name;
    this.accessCode = accessCode;
  }

  deliver = (user: User) => {
    console.log(
      `${user.name} has received ${this.name} (Virtual Product) Access Code: ${this.accessCode} by email (${user.email}).`
    );
  };
}
