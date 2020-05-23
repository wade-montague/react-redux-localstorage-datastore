import ACTIONS from './action';

const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === ACTIONS.TYPE.API_REQUEST) {
    const { entity, headers, method, url } = action.payload.meta.api;

    fetch(url, { method, headers: new Headers(headers) })
      .then(response => response.json())
      .then(data => dispatch(ACTIONS.apiSuccess(data, entity)))
      .then(error => dispatch(ACTIONS.apiFailed(error, entity)));
  }
};

export default apiMiddleware;
