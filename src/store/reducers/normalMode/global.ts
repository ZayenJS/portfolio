import { GlobalActions, HOVER_HEADER } from '../../actions/normalMode';

export interface globalState {
  isHeaderHovered: boolean;
}

const INITIAL_STATE: globalState = { isHeaderHovered: false };

const reducer = (state: globalState = INITIAL_STATE, action: GlobalActions): globalState => {
  switch (action.type) {
    case HOVER_HEADER:
      return {
        ...state,
        isHeaderHovered: action.isHovered,
      };
    default:
      return state;
  }
};

export default reducer;
