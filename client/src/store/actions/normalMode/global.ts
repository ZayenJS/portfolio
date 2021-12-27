import { Accessories } from '../../../models';

export const HOVER_HEADER = 'HOVER_HEADER';
export const SET_ACCESSORIES = 'SET_ACCESSORIES';
export const REMOVE_ALL_ACCESSORIES = 'REMOVE_ALL_ACCESSORIES';

export interface HoverHeaderAction {
  type: typeof HOVER_HEADER;
  isHovered: boolean;
}
export interface SetAccessoriesAction {
  type: typeof SET_ACCESSORIES;
  accessories: Accessories[];
}
export interface RemoveAllAccessoriesAction {
  type: typeof REMOVE_ALL_ACCESSORIES;
}

export const hoverHeader = (isHovered: boolean): HoverHeaderAction => ({
  type: HOVER_HEADER,
  isHovered,
});
export const setAccessories = (accessories: Accessories[]): SetAccessoriesAction => ({
  type: SET_ACCESSORIES,
  accessories,
});
export const removeAllAccessories = (): RemoveAllAccessoriesAction => ({
  type: REMOVE_ALL_ACCESSORIES,
});

export type GlobalActions = HoverHeaderAction | SetAccessoriesAction | RemoveAllAccessoriesAction;
