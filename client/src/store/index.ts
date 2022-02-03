import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  authMiddleware,
  contactMiddleware,
  projectsMiddleware,
  technologyMiddleware,
} from './middlewares';

import rootReducer from './reducers';

const composeEnhancers = composeWithDevTools({ trace: true });
const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware, contactMiddleware, projectsMiddleware, technologyMiddleware),
);

const store = createStore(rootReducer, enhancers);

export default store;
