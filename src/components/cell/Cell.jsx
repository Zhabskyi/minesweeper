import React from "react";
import classes from "./Cell.module.scss";

const Cell = props => {
  const { item, children, coordinates } = props;
  if (item === 1) {
    return (
      <div
        onClick={() => props.openCell(coordinates)}
        className={classes.bomb}
      ></div>
    );
  } else if (item === 0) {
    return (
      <div
        onClick={() => props.openCell(coordinates)}
        className={classes.empty}
      ></div>
    );
  } else {
    return (
      <div
        onClick={() => props.openCell(coordinates)}
        className={classes.container}
      >
        {children / 2}
      </div>
    );
  }
};

export default Cell;
