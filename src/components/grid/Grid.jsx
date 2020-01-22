import React, { useEffect } from "react";
import classes from "./Grid.module.scss";
import Cell from "../../containers/Cell";

const Grid = props => {

  useEffect(() => {
    props.loadCells();
    console.log(props)
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.container}>
      {props.cells?.map(el =>
        el.map(item => {
          return (
            <Cell coordinates={[el, item]} item={item}>
              {item}
            </Cell>
          );
        })
      )}
    </div>
  );
};

export default Grid;
