import { combineReducers } from 'redux';
import { headReducer } from './reducers/headReducer';
import { menuReducer } from './reducers/menuReducer';
import { loadReducer } from './reducers/loadReducer';

const allReducers = {
  loadReducer
};

export const rootReducer = combineReducers(allReducers);