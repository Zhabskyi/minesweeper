import React from "react";
import classes from "./Controls.module.scss";

const Controls = props => {
  return <div className={classes.container}>
    <button className={classes.reset} onClick={() => props.reset}>RESET</button>
  </div>
};

export default Controls;
