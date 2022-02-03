import { SendMailPayload } from '.';

export enum ContactActions {
  SEND_MAIL = 'SEND_MAIL',
  RESET_MAIL = 'RESET_MAIL',
}

export interface SendMailAction {
  type: ContactActions.SEND_MAIL;
  payload: SendMailPayload;
}

export interface ResetMailAction {
  type: ContactActions.RESET_MAIL;
}

export type ContactActionType = SendMailAction | ResetMailAction;
