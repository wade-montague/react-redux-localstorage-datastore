import TYPE from "./type";

declare interface uiState {
  actionCounter: number;
  priorityActionCounter: number;
}

const initialState: uiState = {
  actionCounter: 0,
  priorityActionCounter: 0
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPE.INCREMENT_ACTION_COUNTER:
      return { ...state, actionCounter: state.actionCounter + 1 };
    case TYPE.INCREMENT_PRIORITY_ACTION_COUNTER:
      return { ...state, priorityActionCounter: state.priorityActionCounter + 1 };

    default:
      return state;
  }
}

export default reducer;
