import React, { useEffect } from "react";
import classes from "./Grid.module.scss";
import Cell from "../../containers/Cell";

const Grid = props => {
  useEffect(() => {
    props.loadCells();
    // eslint-disable-next-line
  }, []);

  let result = [];
  let key = 0;
  if (props.cells) {
    for (let i = 0; i < props.cells.length; i++) {
      for (let j = 0; j < props.cells[i].length; j++) {
        key++;
        result.push(
          <Cell
            key={key}
            coordinates={[i, j]}
            open={props.isCellOpen[i][j]}
            flag={props.isFlag[i][j]}
            item={props.cells[i][j]}
          >
            {props.cells[i][j]}
          </Cell>
        );
      }
    }
  }

  const endOfGame = <div className={classes.game_over}>GAME OVER</div>;

  return (
    <div className={classes.container}>
      {result}
      {props.gameOver ? endOfGame : null}
    </div>
  );
};

export default Grid;
