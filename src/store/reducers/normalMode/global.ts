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
    'cap-scumbag',
    'cap-graduate',
    'melon-hat',
    'viking-helmet',
    'blond-hair',
    'hair-black',
    'hair-chestnut-woman-1',
    'hair-chestnut-woman-2',
    'hair-purple-woman',
    'mask-groucho',
    'monocle',
    'eyeglasses',
    'thug-life-glasses',
    'cigarette',
    'smoking-cigarette',
    'smoking-pipe',
    'mask',
    'scar',
    'blunt-thug-life',
    'mustache-gentleman',
    'beard-black',
  ],
  // selectedAccessories: ['melon-hat', 'monocle', 'mustache-gentleman', 'smoking-pipe'],
  selectedAccessories: [],
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
