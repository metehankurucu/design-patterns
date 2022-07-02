import { User } from "./User";

export interface Product {
  name: string;
  deliver: (user: User) => void;
}
