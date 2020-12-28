import { combineReducers } from 'redux';
import page, { pageState } from './page';
import global, { globalState } from './global';

export interface State {
  page: pageState;
  global: globalState;
}

const reducer = combineReducers({ page, global });

export default reducer;
