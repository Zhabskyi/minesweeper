import { INCREMENT_FLAGS, DECREMENT_FLAGS } from "./actionTypes";

const INITIAL_STATE = {
  flagsCount: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_FLAGS:
      return { ...state, flagsCount: state.flagsCount + 1 };
    case DECREMENT_FLAGS:
      return { ...state, flagsCount: state.flagsCount - 1 };
    default:
      return { ...state };
  }
};
