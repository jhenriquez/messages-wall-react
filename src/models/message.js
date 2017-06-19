import User, { IUser } from './user';

export interface IMessage {
  text: string;
  author: IUser,
  createdAt: Date;
}

export default class Message implements IMessage {

  text: string;
  author: IUser;
  createdAt: Date;

  constructor (message: any) {
    this.text = message.text;
    this.createdAt = message.createdAt;
    this.author = new User(message.author);
  }
}