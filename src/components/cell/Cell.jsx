import React from "react";
import classes from "./Cell.module.scss";

const Cell = ({ item }) => {
  if (item === 1) {
    return <div className={classes.bomb}></div>;
  } else {
    return <div className={classes.container}></div>;
  }
};

export default Cell;
