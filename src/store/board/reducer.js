import { OPEN_CELL, SET_NEW_GRID, SET_FLAG } from "./actionTypes";

const INITIAL_STATE = {
  isCellOpen: [],
  isFlag: [],
  cells: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_CELL:
      return { ...state, isCellOpen: action.payload };
    case SET_FLAG:
      return { ...state, isFlag: action.payload };
    case SET_NEW_GRID:
      return { ...state, cells: action.payload };
    default:
      return { ...state };
  }
};
