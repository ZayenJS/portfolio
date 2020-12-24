import { combineReducers } from 'redux';
import page, { pageState } from './page';

export interface State {
  page: pageState;
}

const reducer = combineReducers({ page });

export default reducer;
