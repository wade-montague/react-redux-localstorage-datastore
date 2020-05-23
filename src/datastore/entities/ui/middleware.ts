import TYPE from "./type";
import ACTIONS from "./action";

const incrementActionCounter = ({ dispatch }) => next => action => {
  next(action);
  if (
    action.type !== TYPE.INCREMENT_ACTION_COUNTER ||
    (action.meta && !action.meta.priority)
  )
    dispatch(ACTIONS.incrementActionCounter());

  if (action.meta && action.meta.priority)
    dispatch(ACTIONS.incrementPriorityActionCounter());
};

const uiMiddleware = [incrementActionCounter];

export default uiMiddleware;
