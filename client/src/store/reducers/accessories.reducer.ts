import { Accessory, AccessoryType, Outfit } from '../../models';
import { AccessoriesActions, AccessoriesActionType } from '../actions';

export interface AccessoriesState {
  isHeaderHovered: boolean;
  accessories: Accessory[];
  selectedAccessories: Accessory[];
}

export const outfits: Outfit = {
  'gentleman-1': [
    { type: AccessoryType.HEAD, name: 'top-hat' },
    { type: AccessoryType.EYE, name: 'monocle' },
    { type: AccessoryType.MOUTH, name: 'smoking-pipe' },
    { type: AccessoryType.FACIAL_HAIR, name: 'mustache-gentleman' },
    { type: AccessoryType.CLOTH, name: 'suit' },
  ],
  'gentleman-2': [
    { type: AccessoryType.HEAD, name: 'melon-hat' },
    { type: AccessoryType.EYE, name: 'monocle' },
    { type: AccessoryType.FACIAL_HAIR, name: 'mustache-gentleman' },
    { type: AccessoryType.MOUTH, name: 'smoking-pipe' },
    { type: AccessoryType.CLOTH, name: 'suit' },
  ],
  cov19: [{ type: AccessoryType.MOUTH, name: 'mask' }],

  thug: [
    { type: AccessoryType.EYE, name: 'thug-life-glasses' },
    { type: AccessoryType.MISC, name: 'blunt-thug-life' },
  ],
  pimp: [
    { type: AccessoryType.HEAD, name: 'top-hat' },
    { type: AccessoryType.EYE, name: 'thug-life-glasses' },
    { type: AccessoryType.MISC, name: 'blunt-thug-life' },
    { type: AccessoryType.FACIAL_HAIR, name: 'beard-black' },
    { type: AccessoryType.CLOTH, name: 'black-suit-white-shirt' },
  ],
  godfather: [
    { type: AccessoryType.MISC, name: 'bow-tie' },
    { type: AccessoryType.MISC, name: 'rose' },
    { type: AccessoryType.CLOTH, name: 'black-suit-white-shirt' },
  ],
  xmas: [
    { type: AccessoryType.HEAD, name: 'xmas-hat' },
    { type: AccessoryType.EYE, name: 'round-glasses' },
    { type: AccessoryType.FACIAL_HAIR, name: 'xmas-beard' },
  ],
};

const INITIAL_STATE: AccessoriesState = {
  isHeaderHovered: false,
  accessories: [
    { type: AccessoryType.HEAD, name: 'cap-scumbag' },
    { type: AccessoryType.HEAD, name: 'cap-graduate' },
    { type: AccessoryType.HEAD, name: 'melon-hat' },
    { type: AccessoryType.HEAD, name: 'top-hat' },
    { type: AccessoryType.HEAD, name: 'viking-helmet' },
    { type: AccessoryType.HEAD, name: 'xmas-hat' },
    { type: AccessoryType.HAIR, name: 'blond-hair' },
    { type: AccessoryType.HAIR, name: 'hair-black' },
    { type: AccessoryType.HAIR, name: 'hair-purple-woman' },
    { type: AccessoryType.HAIR, name: 'hair-chestnut-woman-1' },
    { type: AccessoryType.HAIR, name: 'hair-chestnut-woman-2' },
    { type: AccessoryType.EYE, name: 'mask-groucho' },
    { type: AccessoryType.EYE, name: 'monocle' },
    { type: AccessoryType.EYE, name: 'eyeglasses' },
    { type: AccessoryType.EYE, name: 'round-glasses' },
    { type: AccessoryType.EYE, name: 'thug-life-glasses' },
    { type: AccessoryType.MOUTH, name: 'mask' },
    { type: AccessoryType.MOUTH, name: 'smoking-cigarette' },
    { type: AccessoryType.MOUTH, name: 'smoking-pipe' },
    { type: AccessoryType.FACIAL_HAIR, name: 'mustache-gentleman' },
    { type: AccessoryType.MISC, name: 'blunt-thug-life' },
    { type: AccessoryType.FACIAL_HAIR, name: 'beard-black' },
    { type: AccessoryType.FACIAL_HAIR, name: 'xmas-beard' },
    { type: AccessoryType.MISC, name: 'bow-tie' },
    { type: AccessoryType.MISC, name: 'rose' },
    { type: AccessoryType.CLOTH, name: 'suit' },
    { type: AccessoryType.CLOTH, name: 'black-suit-white-shirt' },
    { type: AccessoryType.CLOTH, name: 'shirt' },
  ],
  selectedAccessories: outfits.cov19,
};

const reducer = (
  state: AccessoriesState = INITIAL_STATE,
  action: AccessoriesActionType,
): AccessoriesState => {
  switch (action.type) {
    case AccessoriesActions.SET_ACCESSORIES:
      return { ...state, selectedAccessories: action.payload.accessories };
    case AccessoriesActions.REMOVE_ALL_ACCESSORIES:
      return {
        ...state,
        selectedAccessories: [],
      };
    default:
      return state;
  }
};

export default reducer;
