import { START_TIMER, STOP_TIMER, RESET_TIMER } from "./actionTypes";

let timer;
export const startTimer = () => dispatch => {
  clearInterval(timer);
   timer = setInterval(() => {
    dispatch({
      type: START_TIMER
    });
  }, 1000);
};

export const stopTimer = () => dispatch => {
  clearInterval(timer);
    dispatch({
      type: STOP_TIMER
    });
};

export const resetTimer = () => dispatch => {
  clearInterval(timer);
  dispatch({
    type: RESET_TIMER
  });
};
