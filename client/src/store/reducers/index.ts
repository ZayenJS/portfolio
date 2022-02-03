import { combineReducers } from 'redux';
import accessories, { AccessoriesState } from './accessories.reducer';
import auth, { AuthState } from './auth.reducer';
import contact, { ContactState } from './contact.reducer';
import global, { GlobalState } from './global.reducer';
import projects, { ProjectState } from './projects.reducer';
import technologies, { TechnologyState } from './technologies.reducer';
import user, { UserState } from './user.reducer';

export interface State {
  accessories: AccessoriesState;
  auth: AuthState;
  contact: ContactState;
  global: GlobalState;
  projects: ProjectState;
  technologies: TechnologyState;
  user: UserState;
}

const reducer = combineReducers<State>({
  accessories,
  auth,
  contact,
  global,
  projects,
  technologies,
  user,
});

export default reducer;
