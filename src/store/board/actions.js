import {
  OPEN_CELL,
  SET_NEW_GRID,
  SET_FLAG,
  INCREMENT_FLAGS,
  DECREMENT_FLAGS,
  SET_BOMBS,
  SET_FLAGS_COUNT
} from "./actionTypes";

import {
  generateBombs,
  generateBoard,
  setBombs,
  setCellNumberForBombs,
  generateOverlapBoard
} from "../../helpers/gridHelpers";

export const openCell = coordinates => (dispatch, getState) => {
  const state = getState();

  let isCellOpenRow = [...state.board.isCellOpen[[coordinates[0]]]];
  let isCellOpen = [...state.board.isCellOpen];
  isCellOpenRow[coordinates[1]] = true;
  isCellOpen.splice([coordinates[0]], 1, isCellOpenRow);
  dispatch({
    type: OPEN_CELL,
    payload: isCellOpen
  });
};

export const loadGrid = () => dispatch => {
  const bombs = generateBombs(40);

  const board = generateBoard(16);

  const gridOfBombs = setBombs(board, bombs);
  const result = setCellNumberForBombs(gridOfBombs);
  const overlapBoard = generateOverlapBoard(16);

  dispatch({
    type: SET_NEW_GRID,
    payload: result
  });

  dispatch({
    type: OPEN_CELL,
    payload: overlapBoard
  });

  dispatch({
    type: SET_FLAG,
    payload: overlapBoard
  });

  dispatch({
    type: SET_BOMBS,
    payload: 40
  });

  dispatch({
    type: SET_FLAGS_COUNT,
    payload: 0
  });
};

export const setFlag = coordinates => (dispatch, getState) => {
  const state = getState();
  let isFlag = [...state.board.isFlag];
  isFlag[coordinates[0]][coordinates[1]] = !isFlag[coordinates[0]][
    coordinates[1]
  ];

  if (isFlag[coordinates[0]][coordinates[1]]) {
    dispatch({
      type: INCREMENT_FLAGS
    });
  } else {
    dispatch({
      type: DECREMENT_FLAGS
    });
  }

  dispatch({
    type: SET_FLAG,
    payload: isFlag
  });
};
