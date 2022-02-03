import { ResetMailAction, SendMailPayload } from '.';
import { ContactActions, SendMailAction } from './contact.actions';

export const sendMail = (payload: SendMailPayload): SendMailAction => ({
  type: ContactActions.SEND_MAIL,
  payload,
});

export const resetMail = (): ResetMailAction => ({ type: ContactActions.RESET_MAIL });
