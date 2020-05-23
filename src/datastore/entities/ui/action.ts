import TYPE from "./type";

const incrementActionCounter = () => ({
  type: TYPE.INCREMENT_ACTION_COUNTER
});
const incrementPriorityActionCounter = () => ({
  type: TYPE.INCREMENT_PRIORITY_ACTION_COUNTER
});

const ACTIONS = { incrementPriorityActionCounter, incrementActionCounter };

export default ACTIONS;
