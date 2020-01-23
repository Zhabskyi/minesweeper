import {
  OPEN_CELL,
  SET_NEW_GRID,
  SET_FLAG,
  INCREMENT_FLAGS,
  DECREMENT_FLAGS,
  SET_BOMBS,
  SET_FLAGS_COUNT,
  SET_GAME_OVER,
  SET_WIN,
  RESET_WIN
} from "./actionTypes";

const INITIAL_STATE = {
  isCellOpen: [],
  isFlag: [],
  cells: [],
  flagsCount: 0,
  bombs: 0,
  gameOver: false,
  isWin: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_CELL:
      return { ...state, isCellOpen: action.payload };
    case SET_FLAG:
      return { ...state, isFlag: action.payload };
    case SET_NEW_GRID:
      return { ...state, cells: action.payload };
    case INCREMENT_FLAGS:
      return {
        ...state,
        flagsCount: state.flagsCount + 1,
        bombs: state.bombs - 1
      };
    case DECREMENT_FLAGS:
      return {
        ...state,
        flagsCount: state.flagsCount - 1,
        bombs: state.bombs + 1
      };
    case SET_BOMBS:
      return { ...state, bombs: action.payload };
    case SET_FLAGS_COUNT:
      return { ...state, flagsCount: action.payload };
    case SET_GAME_OVER:
      return { ...state, gameOver: action.payload };
    case SET_WIN:
      return { ...state, isWin: true };
    case RESET_WIN:
      return { ...state, isWin: false };
    default:
      return { ...state };
  }
};
