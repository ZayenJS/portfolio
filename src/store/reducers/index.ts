import { combineReducers } from 'redux';
import devMode, { DevModeState } from './devMode';
import normalMode, { NormalModeState } from './normalMode';

export interface State {
  normalMode: NormalModeState;
  devMode: DevModeState;
}

const reducer = combineReducers<State>({ normalMode, devMode });

export default reducer;
