const mainThunk = (a ,b, c) => {
  return (dispatch, getState, xx) => {
    dispatch({ type: 'LOADREDUCER.CHANGE_MEDIA_PRELOADER', payload: { mediaPreloader: false } });
  }
};

export default {
  mainThunk
};