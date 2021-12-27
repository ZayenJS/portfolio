import { LoginPayload } from '.';

export enum AuthActions {
  LOGIN = 'LOGIN',
}

export interface LoginAction {
  type: AuthActions.LOGIN;
  payload: LoginPayload;
}

export type AuthActionType = LoginAction;
