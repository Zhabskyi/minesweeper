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

export { generateBombs, generateBoard, setBombs };
