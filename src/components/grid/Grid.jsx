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

  return (
    <div className={classes.container}>
      {gridOfBombs.map(el => el.map(item => <Cell item={item} />))}
    </div>
  );
};

export default Grid;
