const exceptionMiddleware = ({ dispatch }) => next => action => {
  try {
    return next(action);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Caught an exception!', err);
    dispatch({ type: 'EXCEPTION', payload: err });
    throw err;
  }
};

export default exceptionMiddleware;
