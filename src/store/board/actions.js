import {
  OPEN_CELL,
  SET_NEW_GRID,
  SET_FLAG,
  INCREMENT_FLAGS,
  DECREMENT_FLAGS,
  SET_BOMBS,
  SET_FLAGS_COUNT,
  SET_GAME_OVER
} from "./actionTypes";

import {
  generateBombs,
  generateBoard,
  setBombs,
  setCellNumberForBombs,
  generateOverlapBoard,
  isArrayInArray
} from "../../helpers/gridHelpers";

export const openCell = coordinates => (dispatch, getState) => {
  const state = getState();

  let isCellOpenRow = [...state.board.isCellOpen[coordinates[0]]];
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

  dispatch({
    type: SET_GAME_OVER,
    payload: false
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

export const gameOver = () => ({
  type: SET_GAME_OVER,
  payload: true
});

export const openEmptyTiles = (coordinates, cells) => dispatch => {
  let colectionEmtyCells = [];
  let colectionCheckedCells = [];
  dispatch(openCell(coordinates));

  colectionEmtyCells.push(coordinates);

  if (cells[coordinates[0]][coordinates[1]] !== 0) {
    return;
  }

  do {
    if (colectionEmtyCells[0] !== undefined) {
      let i = colectionEmtyCells[0][0];
      let j = colectionEmtyCells[0][1];

      if (i + 1 < cells.length) {
        if (
          cells[i + 1][j] === 0 &&
          !isArrayInArray(colectionCheckedCells, [i + 1, j])
        ) {
          colectionEmtyCells.push([i + 1, j]);
          colectionCheckedCells.push([i + 1, j]);
        }
      }

      if (i - 1 >= 0) {
        if (
          cells[i - 1][j] === 0 &&
          !isArrayInArray(colectionCheckedCells, [i - 1, j])
        ) {
          colectionEmtyCells.push([i - 1, j]);
          colectionCheckedCells.push([i - 1, j]);
        }
      }

      if (j + 1 < cells.length) {
        if (
          cells[i][j + 1] === 0 &&
          !isArrayInArray(colectionCheckedCells, [i, j + 1])
        ) {
          colectionEmtyCells.push([i, j + 1]);
          colectionCheckedCells.push([i, j + 1]);
        }
      }

      if (j - 1 >= 0) {
        if (
          cells[i][j - 1] === 0 &&
          !isArrayInArray(colectionCheckedCells, [i, j - 1])
        ) {
          colectionEmtyCells.push([i, j - 1]);
          colectionCheckedCells.push([i, j - 1]);
        }
      }

      if (colectionEmtyCells.length >= 1) {
        dispatch(
          openCell([colectionEmtyCells[0][0], colectionEmtyCells[0][1]])
        );

        colectionEmtyCells.shift();
      }
    }
  } while (colectionEmtyCells.length > 0);


  // Open all cells with numbers besides empty cells
  for (let i = 0; i < colectionCheckedCells.length; i++) {
    for (let j = 0; j < colectionCheckedCells[i].length; j++) {
      if (colectionCheckedCells[i][0] + 1 < cells.length) {
        dispatch(
          openCell([
            colectionCheckedCells[i][0] + 1,
            colectionCheckedCells[i][1]
          ])
        );
      }

      if (colectionCheckedCells[i][0] - 1 >= 0) {
        dispatch(
          openCell([
            colectionCheckedCells[i][0] - 1,
            colectionCheckedCells[i][1]
          ])
        );
      }

      if (colectionCheckedCells[i][1] + 1 < cells.length) {
        dispatch(
          openCell([
            colectionCheckedCells[i][0],
            colectionCheckedCells[i][1] + 1
          ])
        );
      }

      if (colectionCheckedCells[i][1] - 1 >= 0) {
        dispatch(
          openCell([
            colectionCheckedCells[i][0],
            colectionCheckedCells[i][1] - 1
          ])
        );
      }
    }
  }
};
