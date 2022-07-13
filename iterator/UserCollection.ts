import { Aggregator } from "./aggregator";
import { User } from "./User";
import { UserIterator } from "./UserIterator";

export class UserCollection implements Aggregator<User> {
  private list: User[] = [];

  add = (user: User) => {
    this.list.push(user);
  };

  length = () => this.list.length;

  get = (index: number) => this.list[index];

  getIterator() {
    return new UserIterator(this);
  }
}
