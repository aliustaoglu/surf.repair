import { combineReducers } from 'redux';
import { loadReducer } from './reducers/loadReducer';
import { mapReducer } from './reducers/mapReducer';

const allReducers = {
  loadReducer,
  mapReducer
};

export const rootReducer = combineReducers(allReducers);