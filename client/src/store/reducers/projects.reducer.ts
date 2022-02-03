import { Project } from '../../models/Project';
import { ProjectActions, ProjectActionType } from '../actions';

export interface ProjectState {
  projects: Project[];
  project: Project | null;
  error: string | null;
}

const INITIAL_STATE: ProjectState = {
  projects: [],
  project: null,
  error: null,
};

const reducer = (state: ProjectState = INITIAL_STATE, action: ProjectActionType): ProjectState => {
  switch (action.type) {
    case ProjectActions.GET_PROJECTS:
      return {
        ...state,
        projects: action.payload.projects ?? [],
      };

    case ProjectActions.GET_PROJECT_BY_ID:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
