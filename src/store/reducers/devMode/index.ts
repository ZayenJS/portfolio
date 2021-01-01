import { combineReducers } from 'redux';
import global, { globalState } from './global';

export interface DevModeState {
  global: globalState;
}

const reducer = combineReducers<DevModeState>({ global });

export default reducer;
