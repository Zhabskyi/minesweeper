import React from "react";
import classes from "./Grid.module.scss";
import Cell from "../../containers/Cell";

const Grid = props => {
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
  const Win = (
    <div className={classes.win}>
      <div>YOU WIN</div>
      <div className={classes.win_time}>Your time is: {props.time} seconds</div>
    </div>
  );

  if (props.isWin) {
    props.stopTimer();
  }

  return (
    <div data-testid="grid" className={classes.container}>
      {result}
      {props.gameOver ? endOfGame : null}
      {props.isWin ? Win : null}
    </div>
  );
};

export default Grid;
