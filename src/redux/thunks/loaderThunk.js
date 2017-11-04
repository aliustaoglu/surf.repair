const loaderThunk = (loadState) => {
  return (dispatch, getState) => {
    dispatch({ type: 'LOADREDUCER.CHANGE_MEDIA_PRELOADER', payload: { mediaPreloader: loadState } });
  }
};

export default {
  loaderThunk
};