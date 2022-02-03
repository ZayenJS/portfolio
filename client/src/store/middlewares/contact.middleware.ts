import { Dispatch } from 'react';
import { MiddlewareAPI } from 'redux';
import { MailStatus } from '../../models/Mail';
import axios from '../../utils/axios';
import { ContactActions, ContactActionType, resetMail } from '../actions/contact';
import { State } from '../reducers';

export const contactMiddleware =
  (store: MiddlewareAPI) =>
  (next: Dispatch<ContactActionType>) =>
  async (action: ContactActionType) => {
    switch (action.type) {
      case ContactActions.SEND_MAIL: {
        const { fullname, email, subject, message } = (store.getState() as State).contact;
        try {
          const {
            data: { data },
          } = await axios.post('/graphql', {
            query: `
            mutation sendMail($data: SendMailParams!) {
              sendMail(data: $data) {
                errors {
                  message
                  field
                  type
                }
                message
                status
              }
            }
          `,
            variables: {
              data: {
                fullname: fullname.value,
                email: email.value,
                subject: subject.value,
                message: message.value,
              },
            },
          });

          if (data.sendMail) {
            const status = data.sendMail.status as MailStatus;
            action.payload.apiResponse = {
              message: data.sendMail.message,
              isSent: status === MailStatus.SENT,
            };

            if (status === MailStatus.SENT) {
              store.dispatch(resetMail());
            }
          }
        } catch (error) {
          console.trace((error as Error).message);
        }

        return next(action);
      }

      default:
        next(action);
        break;
    }
  };
