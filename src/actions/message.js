import type { IMessage } from '../models/message';

export const GET_MESSAGES = '[Messages] Get Messages From The Server';
export const GET_MESSAGES_SUCCESS = '[Messages] Get Messages Request Succeeded';
export const GET_MESSAGES_FAIL = '[Messages] Get Messages Request Failed';


/**
 * Triggers a request to retrieve the messages from the server.
 */
export class GetMessagesAction {
  type: string;
  payload: any;

  constructor () {
    this.type = GET_MESSAGES;
    this.payload = null;
  }
}

/**
 * Triggered when asynchronous GET_MESSAGES operation completes successfully.
 */
export class GetMessagesActionSuccess {
  type: string;
  payload: IMessage[];

  constructor (payload: IMessage[]) {
    this.type = GET_MESSAGES_SUCCESS;
    this.payload = payload;
  }
}

/**
 * Triggered when asynchronous GET_MESSAGES operation resolve to an error.
 */
export class GetMessagesActionFail {
  type: string;
  payload: any;

  constructor () {
    this.type = GET_MESSAGES_FAIL;
    this.payload = null;
  }
}

export type Action = GetMessagesAction
                | GetMessagesActionFail
                | GetMessagesActionSuccess;