import { Accessories, Outfit } from '../../../models';
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

export const outfits: Outfit = {
  'gentleman-1': ['top-hat', 'monocle', 'mustache-gentleman', 'suit', 'smoking-pipe'],
  'gentleman-2': ['melon-hat', 'monocle', 'mustache-gentleman', 'suit', 'smoking-pipe'],
  cov19: ['mask'],

  thug: ['thug-life-glasses', 'blunt-thug-life'],
  godfather: ['black-suit-white-shirt', 'bow-tie', 'rose'],
  xmas: ['xmas-hat', 'round-glasses', 'xmas-beard'],
};

const INITIAL_STATE: globalState = {
  isHeaderHovered: false,
  accessories: [
    'cap-scumbag',
    'cap-graduate',
    'melon-hat',
    'top-hat',
    'viking-helmet',
    'xmas-hat',
    'blond-hair',
    'hair-black',
    'hair-purple-woman',
    'hair-chestnut-woman-1',
    'hair-chestnut-woman-2',
    'mask-groucho',
    'monocle',
    'eyeglasses',
    'round-glasses',
    'thug-life-glasses',
    'mask',
    'smoking-cigarette',
    'smoking-pipe',
    'mustache-gentleman',
    'blunt-thug-life',
    'beard-black',
    'xmas-beard',
    'bow-tie',
    'rose',
    'suit',
    'black-suit-white-shirt',
    'shirt',
  ],
  selectedAccessories: outfits['cov19'],
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
