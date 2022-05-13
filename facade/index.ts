import UserAccount from "./UserAccount";
import UserFacade from "./UserFacade";

(() => {
  const user1 = new UserAccount({
    id: "1",
    name: "First User",
    isPrivate: false,
  });

  const user2 = new UserAccount({
    id: "2",
    name: "Second User",
    isPrivate: true,
  });

  const userFacade = new UserFacade();

  const user2Profile = userFacade.getUserProfile(user1, user2);

  console.log("User 2 profile");
  console.log(user2Profile);
})();
