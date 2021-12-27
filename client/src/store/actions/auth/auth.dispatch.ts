import { AuthActions, LoginAction, LoginPayload } from '.';

export const login = (payload: LoginPayload = {}): LoginAction => ({
  type: AuthActions.LOGIN,
  payload,
});
