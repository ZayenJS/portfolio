import {
  AccessoriesActions,
  RemoveAllAccessoriesAction,
  SetAccessoriesAction,
  SetAccessoriesPayload,
} from '.';

export const setAccessories = (payload: SetAccessoriesPayload): SetAccessoriesAction => ({
  type: AccessoriesActions.SET_ACCESSORIES,
  payload,
});
export const removeAllAccessories = (): RemoveAllAccessoriesAction => ({
  type: AccessoriesActions.REMOVE_ALL_ACCESSORIES,
});
