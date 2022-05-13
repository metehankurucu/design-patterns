import BlockService from "./BlockService";
import FollowService from "./FollowService";
import UserAccount from "./UserAccount";
import UserService from "./UserService";

class UserFacade {
  protected blockService: BlockService;
  protected followService: FollowService;
  protected userService: UserService;

  constructor() {
    this.blockService = new BlockService();
    this.followService = new FollowService();
    this.userService = new UserService();
  }

  getUserProfile = (user: UserAccount, requestedUser: UserAccount) => {
    if (this.blockService.checkBlock(requestedUser, user)) {
      // User has blocked from requested user
      throw new Error("User has blocked.");
    }

    if (
      requestedUser.isPrivate &&
      !this.followService.checkFollowing(user, requestedUser)
    ) {
      // Requested user account is private and user does not follow requested user
      throw new Error("User account is private.");
    }

    return this.userService.getUserProfile(requestedUser);
  };
}

export default UserFacade;
