import { Technology } from '../../models/Technology';
import { TechnologyActions, TechnologyActionType } from '../actions';

export interface TechnologyState {
  technologies: Technology[];
  technology: Technology | null;
  error: string | null;
}

const INITIAL_STATE: TechnologyState = {
  technologies: [],
  technology: null,
  error: null,
};

const reducer = (
  state: TechnologyState = INITIAL_STATE,
  action: TechnologyActionType,
): TechnologyState => {
  switch (action.type) {
    case TechnologyActions.GET_TECHNOLOGIES:
      return {
        ...state,
        technologies: action.payload.technologies ?? [],
        error: action.payload.error ?? null,
      };

    case TechnologyActions.GET_TECHNOLOGY_BY_ID:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
