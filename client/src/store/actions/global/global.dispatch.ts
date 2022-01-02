import {
  ChangeModeAction,
  ChangeModePayload,
  GlobalActions,
  HoverHeaderAction,
  HoverHeaderPayload,
} from '.';

export const hoverHeader = (payload: HoverHeaderPayload): HoverHeaderAction => ({
  type: GlobalActions.HOVER_HEADER,
  payload,
});

export const changeMode = (payload: ChangeModePayload): ChangeModeAction => ({
  type: GlobalActions.CHANGE_MODE,
  payload,
});
