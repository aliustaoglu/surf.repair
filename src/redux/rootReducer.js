import { combineReducers } from 'redux';
import { loadReducer } from './reducers/loadReducer';
import { mapData } from './reducers/mapData';

const allReducers = {
  loadReducer,
  mapData
};

export const rootReducer = combineReducers(allReducers);