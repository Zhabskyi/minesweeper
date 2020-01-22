import { OPEN_CELL, SET_NEW_GRID } from "./actionTypes";

import {
  generateBombs,
  generateBoard,
  setBombs,
  setCellNumberForBombs
} from "../../helpers/gridHelpers";

export const openCell = coordinates => ({
  type: OPEN_CELL,
  payload: coordinates
});

export const loadGrid = () => dispatch => {
  const bombs = generateBombs(40);

  const board = generateBoard(16);

  const gridOfBombs = setBombs(board, bombs);
  const result = setCellNumberForBombs(gridOfBombs);

  dispatch({
    type: SET_NEW_GRID,
    payload: result
  });

  console.log("RESULT", result);
};

export const setFlag = (coordinates) => dispatch => {

}
