import { combineReducers } from 'redux';
import page, { pageState } from './page';
import global, { globalState } from './global';

export interface NormalModeState {
  page: pageState;
  global: globalState;
}

const reducer = combineReducers<NormalModeState>({ page, global });

export default reducer;
