export const fetchHandler = url =>
  fetch(url).then(response => {
    return response.json();
  });

export const fetchHandlerDispatcher = (dispatch, url, thenDispatcher, catchDispatcher, preFetchDispatcher) => {
  dispatch(preFetchDispatcher());
  return fetchHandler(url)
    .then(data => {
      dispatch(thenDispatcher(data));
    })
    .catch(error => {
      dispatch(catchDispatcher(error));
    });
};
