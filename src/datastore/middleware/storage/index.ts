const storageMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.meta && action.meta.dao) {
    const { store, ttl } = action.meta.dao;
    if (!store || ttl === 0) return next(action);

    dispatch({ type: 'TRANSFORM_CONTENT', payload: { entity: 'professional', content: { a: [1, 2, 3, 4] }, mapper: 'listing' } });
  }
};

export default storageMiddleware;
