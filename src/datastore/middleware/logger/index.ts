// eslint-disable-next-line no-unused-vars
const loggerMiddleware = store => next => action => {
  console.log("loggerMiddleware dispatching: ", action.type);
  const result = next(action);
  // console.log('next state', Object.keys(store.getState()));
  return result;
};

export default loggerMiddleware;
