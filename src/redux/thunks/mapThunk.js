import { fetchMapData, successMapData, failedMapData } from '../reducers/mapReducer';
import { endPoints } from '../../configs/gateways';

export const loadMapData = params => {
  return (dispatch, getState) => {
    dispatch(fetchMapData());
    fetch(endPoints.mapData)
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(successMapData(data));
      }).catch(error => {
        dispatch(failedMapData(error));
      });
  };
};
