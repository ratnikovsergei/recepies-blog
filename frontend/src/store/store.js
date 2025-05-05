import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { appReducer, postReducer, recipeReducer, userReducer } from './reducers';

const reducer = combineReducers({
  app: appReducer,
  post: postReducer,
  recipe: recipeReducer,
  user: userReducer,
});

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnchancers(applyMiddleware(thunk)));
