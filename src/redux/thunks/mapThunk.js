import { MAP_ACTIONS, fetchMapData, successMapData, failedMapData } from '../reducers/mapReducer';


export const loadMapData = params => {
  return (dispatch, getState) => {
    dispatch(fetchMapData());
    fetch('https://uknbu6qzl9.execute-api.us-east-1.amazonaws.com/beta')
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(successMapData(data));
      });
  };
};
