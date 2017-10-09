import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';

export const store = createStore(
  rootReducer
);
