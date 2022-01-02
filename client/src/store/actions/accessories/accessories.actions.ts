import { SetAccessoriesPayload } from '.';

export enum AccessoriesActions {
  SET_ACCESSORIES = 'SET_ACCESSORIES',
  REMOVE_ALL_ACCESSORIES = 'REMOVE_ALL_ACCESSORIES',
}

export interface SetAccessoriesAction {
  type: AccessoriesActions.SET_ACCESSORIES;
  payload: SetAccessoriesPayload;
}
export interface RemoveAllAccessoriesAction {
  type: AccessoriesActions.REMOVE_ALL_ACCESSORIES;
}

export type AccessoriesActionType = SetAccessoriesAction | RemoveAllAccessoriesAction;
