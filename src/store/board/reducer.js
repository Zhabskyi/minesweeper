import { OPEN_CELL, SET_NEW_GRID } from "./actionTypes";

const INITIAL_STATE = {
  isCellOpen: false,
  cells: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_CELL:
      return { ...state, isCellOpen: true };
    case SET_NEW_GRID:
      return { ...state, cells: action.payload };
    default:
      return { ...state };
  }
};
