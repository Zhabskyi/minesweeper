import React from "react";
import classes from "./Grid.module.scss";
import Cell from "../cell/Cell";
import {
  generateBombs,
  generateBoard,
  setBombs
} from "../../helpers/gridHelpers";

const Grid = () => {
  const bombs = generateBombs(40);

  const board = generateBoard(16);

  const gridOfBombs = setBombs(board, bombs);

  console.log(gridOfBombs);

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

  console.log(setCellNumberForBombs(gridOfBombs));

  return (
    <div className={classes.container}>
      {gridOfBombs.map(el => el.map(item => <Cell item={item} />))}
    </div>
  );
};

export default Grid;
