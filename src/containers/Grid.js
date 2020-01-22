import { connect } from "react-redux";
import Grid from "../components/grid/Grid";
import { loadGrid, getCells, getOverlapCells, getOverlapFlags } from "../store/board";

const mapDispatchToProps = dispatch => ({
  loadCells: () => dispatch(loadGrid())
});

const mapStateToProps = state => {
  return {
    cells: getCells(state),
    isCellOpen: getOverlapCells(state),
    isFlag: getOverlapFlags(state)
  };
};

const GridContainer = connect(mapStateToProps, mapDispatchToProps)(Grid);

export default GridContainer;
