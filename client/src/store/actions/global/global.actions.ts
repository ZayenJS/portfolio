import {
  ChangeModePayload,
  ChangeValuePayload,
  FieldTouchedPayload,
  HoverHeaderPayload,
  ResetNotificationPayload,
  SetFieldErrorPayload,
} from '.';

export enum GlobalActions {
  HOVER_HEADER = 'HOVER_HEADER',
  CHANGE_MODE = 'CHANGE_MODE',
  CHANGE_VALUE = 'CHANGE_VALUE',
  FIELD_TOUCHED = 'FIELD_TOUCHED',
  SET_FIELD_ERROR = 'SET_FIELD_ERROR',
  RESET_NOTIFICATION = 'RESET_NOTIFICATION',
}

export interface HoverHeaderAction {
  type: GlobalActions.HOVER_HEADER;
  payload: HoverHeaderPayload;
}

export interface ChangeModeAction {
  type: GlobalActions.CHANGE_MODE;
  payload: ChangeModePayload;
}

export interface ChangeValueAction {
  type: GlobalActions.CHANGE_VALUE;
  payload: ChangeValuePayload;
}

export interface FieldTouchedAction {
  type: GlobalActions.FIELD_TOUCHED;
  payload: FieldTouchedPayload;
}

export interface SetFieldErrorAction {
  type: GlobalActions.SET_FIELD_ERROR;
  payload: SetFieldErrorPayload;
}

export interface ResetNotificationAction {
  type: GlobalActions.RESET_NOTIFICATION;
  payload: ResetNotificationPayload;
}

export type GlobalActionType =
  | HoverHeaderAction
  | ChangeModeAction
  | ChangeValueAction
  | FieldTouchedAction
  | ResetNotificationAction
  | SetFieldErrorAction;
