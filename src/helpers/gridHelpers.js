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

// const openEmptyTiles = (coordinates, cells) => {
//   let colectionEmtyCells = [];
//   let colectionCheckedCells = [];

//   colectionEmtyCells.push(coordinates);
//   colectionCheckedCells.push(coordinates);

//   do {
//     let i = colectionEmtyCells[0][0];
//     let j = colectionEmtyCells[0][1];

//    // console.log("Value of cell", cells[i][j]);

//     if (i + 1 < cells.length) {
//       //console.log("IF SSTATEMENT", cells[i + 1][j]);
//      // console.log("INCLUDE", [i + 1, j]);
//       if (
//         (cells[i + 1][j] === 0 || cells[i + 1][j] !== 1) &&
//         !isArrayInArray(colectionCheckedCells, [i + 1, j])
//       ) {
//         colectionEmtyCells.push([i + 1, j]);
//         colectionCheckedCells.push([i + 1, j]);
//       }
//     }

//     if (i - 1 >= 0) {
//       //console.log("IF SSTATEMENT", cells[i - 1][j]);
//       if (
//         (cells[i - 1][j] === 0 || cells[i - 1][j] !== 1) &&
//         !isArrayInArray(colectionCheckedCells, [i - 1, j])
//       ) {
//         colectionEmtyCells.push([i - 1, j]);
//         colectionCheckedCells.push([i - 1, j]);
//       }
//     }

//     if (j + 1 < cells.length) {
//      // console.log("IF SSTATEMENT", cells[i][j + 1]);
//       if (
//         (cells[i][j + 1] === 0 || cells[i][j + 1] !== 1) &&
//         !isArrayInArray(colectionCheckedCells, [i, j + 1])
//       ) {
//         colectionEmtyCells.push([i, j + 1]);
//         colectionCheckedCells.push([i, j + 1]);
//       }
//     }

//     if (j - 1 >= 0) {
//     //  console.log("IF SSTATEMENT", cells[i][j - 1]);
//       if (
//         (cells[i][j - 1] === 0 || cells[i][j - 1] !== 1) &&
//         !isArrayInArray(colectionCheckedCells, [i, j - 1])
//       ) {
//         colectionEmtyCells.push([i, j - 1]);
//         colectionCheckedCells.push([i, j - 1]);
//       }
//     }

//     if (colectionEmtyCells.length > 1) {
//       console.log(colectionEmtyCells);
//       console.log([colectionEmtyCells[1][0], colectionEmtyCells[1][1]]);
//      // debugger;
//       openCell([colectionEmtyCells[1][0], colectionEmtyCells[1][1]]);
//       colectionEmtyCells.shift();
//     }
//     // colectionEmtyCells.shift();
//     console.log(colectionEmtyCells);
//   } while (colectionEmtyCells.length > 1);
// };

const isArrayInArray = (arr, item) => {
  const item_as_string = JSON.stringify(item);
  const contains = arr.some(el => JSON.stringify(el) === item_as_string);

  return contains;
};

export {
  generateBombs,
  generateBoard,
  setBombs,
  setCellNumberForBombs,
  generateOverlapBoard,
  isArrayInArray
};
