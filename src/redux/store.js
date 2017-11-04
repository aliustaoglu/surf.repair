import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';
import thunks from './thunks/mainThunk';

/*const customMiddleware = store => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
return next(action);
};*/

export const store = createStore(
  rootReducer,
  compose(
    //applyMiddleware(customMiddleware),
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

