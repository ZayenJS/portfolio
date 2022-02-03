import { AxiosError } from 'axios';
import { Dispatch } from 'react';
import { MiddlewareAPI } from 'redux';
import axios from '../../utils/axios';
import { AuthActions, AuthActionType } from '../actions/auth';
import { State } from '../reducers';

export const authMiddleware =
  (store: MiddlewareAPI) => (next: Dispatch<AuthActionType>) => async (action: AuthActionType) => {
    switch (action.type) {
      case AuthActions.LOGIN: {
        try {
          // const { auth } = store.getState() as State;
          // const {
          //   data: { data },
          // } = await axios.post('/graphql', {
          //   query: `
          //   mutation LoginMutation($data: UserLoginData!) {
          //     login(data: $data) {
          //       errors {
          //         type
          //         field
          //         message
          //       }
          //       user {
          //         id
          //         username
          //         email
          //         type
          //       }
          //     }
          //   }
          // `,
          //   variables: {
          //     data: {
          //       emailOrUsername: auth.emailOrUsername,
          //       password: auth.password,
          //     },
          //   },
          // });
          // //TODO: handle data.login.errors
          // if (data.login.user) {
          //   action.payload.user = data.login.user;
          // }
        } catch (error) {
          console.trace((error as Error).message);
        }

        console.log(action);
        return next(action);
      }
      default:
        next(action);
        break;
    }
  };
