import User from './user';
import type { IUser } from './user';

export type IMessage = {
  text: string;
  author: IUser,
  createdAt: Date;
}

export default class Message {

  text: string;
  author: IUser;
  createdAt: Date;

  constructor (message: any) {
    this.text = message.text;
    this.createdAt = message.createdAt;
    this.author = new User(message.author);
  }
}