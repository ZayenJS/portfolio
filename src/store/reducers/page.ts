import { CHANGE_PAGE, PageActions } from '../actions';

export interface pageState {
  isChanging: boolean;
}

const INITIAL_STATE: pageState = { isChanging: false };

const reducer = (state: pageState = INITIAL_STATE, action: PageActions): pageState => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        isChanging: action.isChanging,
      };
    default:
      return state;
  }
};

export default reducer;
