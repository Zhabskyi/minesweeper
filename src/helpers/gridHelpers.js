const generateBombs = number => {
  let setOfBombs = [];
  for (let i = 0; i < number; i++) {
    let coordinates = [];
    coordinates.push(Math.floor(Math.random() * 16));
    coordinates.push(Math.floor(Math.random() * 16));
    setOfBombs.push(coordinates);
  }
  return setOfBombs;
};

const generateBoard = size => {
  let row = [];
  for (let i = 0; i < size; i++) {
    row[i] = [];
    for (let j = 0; j < size; j++) {
      row[i][j] = 0;
    }
  }
  return row;
};

const setBombs = (board, bombs) => {
  for (const item of bombs) {
    board[item[0]][item[1]] = 1;
  }
  return board;
};

const setCellNumberForBombs = gridOfBombs => {
  for (let i = 0; i < gridOfBombs.length; i++) {
    for (let j = 0; j < gridOfBombs[i].length; j++) {
      if (gridOfBombs[i][j] === 1) {
        if (j - 1 >= 0) {
          if (gridOfBombs[i][j - 1] !== 1) {
            gridOfBombs[i][j - 1] += 2;
          }
        }

        if (j + 1 < gridOfBombs.length) {
          if (gridOfBombs[i][j + 1] !== 1) {
            gridOfBombs[i][j + 1] += 2;
          }
        }

        if (j - 1 >= 0 && i - 1 >= 0) {
          if (gridOfBombs[i - 1][j - 1] !== 1) {
            gridOfBombs[i - 1][j - 1] += 2;
          }
        }

        if (i - 1 >= 0) {
          if (gridOfBombs[i - 1][j] !== 1) {
            gridOfBombs[i - 1][j] += 2;
          }
        }

        if (i - 1 >= 0 && j + 1 < gridOfBombs.length) {
          if (gridOfBombs[i - 1][j + 1] !== 1) {
            gridOfBombs[i - 1][j + 1] += 2;
          }
        }

        if (i + 1 < gridOfBombs.length && j - 1 >= 0) {
          if (gridOfBombs[i + 1][j - 1] !== 1) {
            gridOfBombs[i + 1][j - 1] += 2;
          }
        }

        if (i + 1 < gridOfBombs.length) {
          if (gridOfBombs[i + 1][j] !== 1) {
            gridOfBombs[i + 1][j] += 2;
          }
        }

        if (i + 1 < gridOfBombs.length && j + 1 < gridOfBombs.length) {
          if (gridOfBombs[i + 1][j + 1] !== 1) {
            gridOfBombs[i + 1][j + 1] += 2;
          }
        }
      }
    }
  }
  return gridOfBombs;
};

const generateOverlapBoard = size => {
  let row = [];
  for (let i = 0; i < size; i++) {
    row[i] = [];
    for (let j = 0; j < size; j++) {
      row[i][j] = false;
    }
  }
  return row;
};

export {
  generateBombs,
  generateBoard,
  setBombs,
  setCellNumberForBombs,
  generateOverlapBoard
};
