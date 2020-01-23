import React from "react";
import classes from "./Controls.module.scss";

const Controls = props => {
  const { flagsCount, bombsCount, time } = props;
  return (
    <div className={classes.container}>
      <button
        className={classes.reset}
        onClick={() => {
          props.resetTimer();
          props.startTimer();
          props.reset();
        }}
      >
        START
      </button>
      <div className={classes.flag}>
        <div className={classes.flag_pic}></div>
        <div className={classes.flag_count}>{flagsCount}</div>
      </div>
      <div className={classes.bomb}>
        <div className={classes.bomb_pic}></div>
        <div className={classes.bomb_count}>{bombsCount}</div>
      </div>
      <div className={classes.timer}>
        <div className={classes.timer_pic}></div>
        <div className={classes.timer_count}>{time}</div>
      </div>
    </div>
  );
};

export default Controls;
