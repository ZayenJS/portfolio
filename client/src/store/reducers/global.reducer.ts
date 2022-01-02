import { Mode } from '../../models';
import { GlobalActions, GlobalActionType } from '../actions';

export interface GlobalState {
  isHeaderHovered: boolean;
  mode: Mode;
}

const INITIAL_STATE: GlobalState = {
  isHeaderHovered: false,
  mode: Mode.NORMAL,
};

const reducer = (state: GlobalState = INITIAL_STATE, action: GlobalActionType): GlobalState => {
  switch (action.type) {
    case GlobalActions.HOVER_HEADER: {
      return {
        ...state,
        isHeaderHovered: action.payload.isHovered,
      };
    }
    case GlobalActions.CHANGE_MODE: {
      return {
        ...state,
        mode: action.payload.mode,
      };
    }

    default:
      return state;
  }
};

export default reducer;
