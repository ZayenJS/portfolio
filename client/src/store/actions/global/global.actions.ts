import { ChangeModePayload, HoverHeaderPayload } from '.';

export enum GlobalActions {
  HOVER_HEADER = 'HOVER_HEADER',
  CHANGE_MODE = 'CHANGE_MODE',
}

export interface HoverHeaderAction {
  type: GlobalActions.HOVER_HEADER;
  payload: HoverHeaderPayload;
}

export interface ChangeModeAction {
  type: GlobalActions.CHANGE_MODE;
  payload: ChangeModePayload;
}

export type GlobalActionType = HoverHeaderAction | ChangeModeAction;
