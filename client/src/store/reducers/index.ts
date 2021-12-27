import { combineReducers } from 'redux';
import devMode, { DevModeState } from './devMode';
import normalMode, { NormalModeState } from './normalMode';
import auth, { AuthState } from './auth.reducer';
import user, { UserState } from './user.reducer';

export interface State {
  normalMode: NormalModeState;
  devMode: DevModeState;
  auth: AuthState;
  user: UserState;
}

const reducer = combineReducers<State>({ normalMode, devMode, auth, user });

export default reducer;
