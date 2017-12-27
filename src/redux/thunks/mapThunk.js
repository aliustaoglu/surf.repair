import { fetchMapData, successMapData, failedMapData } from '../reducers/mapData';
import { endPoints } from '../../configs/gateways';
import { fetchHandlerDispatcher } from '../thunkHelper';

export const loadMapData = params => {
  return (dispatch, getState) => {
    fetchHandlerDispatcher(dispatch, endPoints.mapData, successMapData, failedMapData, fetchMapData);
  };
};
