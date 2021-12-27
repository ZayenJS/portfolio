import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { authMiddleware } from './middlewares';

import rootReducer from './reducers';

const composeEnhancers = composeWithDevTools({ trace: true });
const enhancers = composeEnhancers(applyMiddleware(authMiddleware));

const store = createStore(rootReducer, enhancers);

export default store;
