import { START_TIMER, STOP_TIMER, RESET_TIMER } from "./actionTypes";

const INITIAL_STATE = {
  time: 0,
  isOn: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_TIMER:
      return { ...state, time: state.time + 1 };
    case STOP_TIMER:
      return { ...state, time: state.time };
    case RESET_TIMER:
      return { ...state, time: 0 };
    default:
      return { ...state };
  }
};
