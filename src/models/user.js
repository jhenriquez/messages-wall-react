export type IUser = {
  name: string;
  email: string;
  emailHash: string;
}

export default class User {

  name: string;
  email: string;
  emailHash: string;

  constructor(user: any) {
    this.name = user.name;
    this.email = user.email;
    this.emailHash = user.emailHash;
  }

}