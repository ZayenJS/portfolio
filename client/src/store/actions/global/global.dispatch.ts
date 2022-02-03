import {
  ChangeModeAction,
  ChangeModePayload,
  ChangeValueAction,
  ChangeValuePayload,
  FieldTouchedAction,
  FieldTouchedPayload,
  GlobalActions,
  HoverHeaderAction,
  HoverHeaderPayload,
  ResetNotificationAction,
  ResetNotificationPayload,
  SetFieldErrorAction,
  SetFieldErrorPayload,
} from '.';

export const hoverHeader = (payload: HoverHeaderPayload): HoverHeaderAction => ({
  type: GlobalActions.HOVER_HEADER,
  payload,
});

export const changeMode = (payload: ChangeModePayload): ChangeModeAction => ({
  type: GlobalActions.CHANGE_MODE,
  payload,
});

export const changeValue = (payload: ChangeValuePayload): ChangeValueAction => ({
  type: GlobalActions.CHANGE_VALUE,
  payload,
});

export const fieldTouched = (payload: FieldTouchedPayload): FieldTouchedAction => ({
  type: GlobalActions.FIELD_TOUCHED,
  payload,
});

export const setFieldError = (payload: SetFieldErrorPayload): SetFieldErrorAction => ({
  type: GlobalActions.SET_FIELD_ERROR,
  payload,
});

export const resetNotification = (payload: ResetNotificationPayload): ResetNotificationAction => ({
  type: GlobalActions.RESET_NOTIFICATION,
  payload,
});
