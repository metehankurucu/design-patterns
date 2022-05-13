class UserAccount {
  id: string;
  name: string;
  isPrivate: boolean;

  constructor({
    id,
    name,
    isPrivate,
  }: {
    id: string;
    name: string;
    isPrivate: boolean;
  }) {
    this.id = id;
    this.name = name;
    this.isPrivate = isPrivate;
  }
}

export default UserAccount;
