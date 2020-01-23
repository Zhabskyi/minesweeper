import { connect } from "react-redux";
import Grid from "../components/grid/Grid";
import {
  loadGrid,
  getCells,
  getOverlapCells,
  getOverlapFlags,
  getIsGameOver,
  getIsWin
} from "../store/board";

import { getTime, stopTimer } from "../store/infoPanel";

const mapDispatchToProps = dispatch => ({
  loadCells: () => dispatch(loadGrid()),
  stopTimer: () => dispatch(stopTimer())
});

const mapStateToProps = state => {
  return {
    cells: getCells(state),
    isCellOpen: getOverlapCells(state),
    isFlag: getOverlapFlags(state),
    gameOver: getIsGameOver(state),
    isWin: getIsWin(state),
    time: getTime(state)
  };
};

const GridContainer = connect(mapStateToProps, mapDispatchToProps)(Grid);

export default GridContainer;
