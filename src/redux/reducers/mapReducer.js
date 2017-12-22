import R from 'ramda';
import { createAction } from 'redux-actions';

const initialState = {
  isMapDataFetching: false,
  mapData: {}
};

export const MAP_ACTIONS = {
  MAP_DATA_FETCHING: 'MAP_DATA_FETCHING',
  MAP_DATA_FETCHED: 'MAP_DATA_FETCHED',
  MAP_DATA_FAILED: 'MAP_DATA_FAILED'
};

export const fetchMapData = createAction(MAP_ACTIONS.MAP_DATA_FETCHING);
export const successMapData = createAction(MAP_ACTIONS.MAP_DATA_FETCHED);
export const failedMapData = createAction(MAP_ACTIONS.MAP_DATA_FAILED);

export const mapReducer = function(state = initialState, action) {
  switch (action.type) {
    case MAP_ACTIONS.MAP_DATA_FETCHING:
      return R.merge(state, { isMapDataFetching: true });
    case MAP_ACTIONS.MAP_DATA_FETCHED:
      return R.merge(state, { isMapDataFetching: false, mapData: action.payload });
    case MAP_ACTIONS.MAP_DATA_FAILED:
      return R.merge(state, { isMapDataFetching: false, mapData: null });
    default:
      return state;
  }
};
