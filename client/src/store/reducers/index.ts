import { combineReducers } from 'redux';
import accessories, { AccessoriesState } from './accessories.reducer';
import auth, { AuthState } from './auth.reducer';
import user, { UserState } from './user.reducer';
import global, { GlobalState } from './global.reducer';

export interface State {
  accessories: AccessoriesState;
  auth: AuthState;
  user: UserState;
  global: GlobalState;
}

const reducer = combineReducers<State>({ accessories, auth, user, global });

export default reducer;
