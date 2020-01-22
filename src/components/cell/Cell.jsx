import React from "react";
import classes from "./Cell.module.scss";

const Cell = props => {
  const { item, children, coordinates, open, flag } = props;
  if (open && !flag) {
    if (item === 1) {
      return <div className={classes.bomb}></div>;
    } else if (item === 0) {
      return <div className={classes.empty}></div>;
    } else {
      return <div className={classes.number}>{children / 2}</div>;
    }
  } else if (flag) {
    return (
      <div
        onContextMenu={e => {
          e.preventDefault();
          props.setFlag(coordinates);
        }}
        className={classes.flag}
      ></div>
    );
  } else {
    return (
      <div
        onClick={() => props.openCell(coordinates)}
        onContextMenu={e => {
          e.preventDefault();
          props.setFlag(coordinates);
        }}
        className={classes.closed}
      ></div>
    );
  }
};

export default Cell;
