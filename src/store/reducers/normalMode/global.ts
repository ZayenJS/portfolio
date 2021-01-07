import { Accessories } from '../../../models';
import {
  GlobalActions,
  HOVER_HEADER,
  REMOVE_ALL_ACCESSORIES,
  SET_ACCESSORIES,
} from '../../actions/normalMode';

export interface globalState {
  isHeaderHovered: boolean;
  accessories: Accessories[];
  selectedAccessories: Accessories[];
}

const INITIAL_STATE: globalState = {
  isHeaderHovered: false,
  accessories: [
    'beard-black',
    'big-chestnut-beard',
    'cigarette',
    'smoking-cigarette',
    'smoking-pipe',
    'monocle',
    'blond-hair',
    'hair-black',
    'hair-chestnut-woman-1',
    'hair-chestnut-woman-2',
    'hair-purple-woman',
    'viking-helmet',
    'cap-graduate',
    'melon-hat',
    'mustache-gentleman',
    'scar',
  ],
  selectedAccessories: ['melon-hat', 'monocle', 'mustache-gentleman', 'smoking-pipe'],
};

const reducer = (state: globalState = INITIAL_STATE, action: GlobalActions): globalState => {
  switch (action.type) {
    case HOVER_HEADER:
      return {
        ...state,
        isHeaderHovered: action.isHovered,
      };
    case SET_ACCESSORIES:
      return { ...state, selectedAccessories: action.accessories };
    case REMOVE_ALL_ACCESSORIES:
      return {
        ...state,
        selectedAccessories: [],
      };
    default:
      return state;
  }
};

export default reducer;
