import { connect } from "react-redux";
import Grid from "../components/grid/Grid";
import { loadGrid, getCells } from "../store/board";

const mapDispatchToProps = dispatch => ({
  loadCells: () => dispatch(loadGrid())
});

const mapStateToProps = state => {
  return {
    cells: getCells(state)
  };
};

const GridContainer = connect(mapStateToProps, mapDispatchToProps)(Grid);

export default GridContainer;
