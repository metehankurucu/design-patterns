import { Iterator } from "./Iterator";
import { User } from "./User";
import { UserCollection } from "./UserCollection";

export class UserIterator implements Iterator<User> {
  private collection: UserCollection;
  private position: number;

  constructor(collection: UserCollection) {
    this.collection = collection;
    this.position = 0;
  }

  next() {
    return this.collection.get(this.position++);
  }

  hasNext() {
    return this.position < this.collection.length();
  }
}
