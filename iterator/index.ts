import { User } from "./User";
import { UserCollection } from "./UserCollection";

(() => {
  const user1 = new User("user1");
  const user2 = new User("user2");
  const user3 = new User("user3");
  const user4 = new User("user4");

  const userCollection = new UserCollection();

  userCollection.add(user1);
  userCollection.add(user2);
  userCollection.add(user3);
  userCollection.add(user4);

  const userIterator = userCollection.getIterator();

  while (userIterator.hasNext()) {
    const user = userIterator.next();
    console.log(user.name);
  }
})();
