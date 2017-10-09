import R from 'ramda';

const initialState = {
  mediaPreloader: true
};

export const loadReducer = function(state = initialState, action) {
  switch (action.type) {
    case 'LOADREDUCER.CHANGE_MEDIA_PRELOADER':
      const K = R.merge(state, action.payload);
      return K;
    default:
      return state;
  }
};
