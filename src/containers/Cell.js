import { connect } from "react-redux";
import Cell from "../components/cell/Cell";
import {
  setFlag,
  gameOver,
  getCells,
  openEmptyTiles
} from "../store/board";

const mapDispatchToProps = dispatch => ({
  openCell: (coordinates, cells) =>
    dispatch( openEmptyTiles(coordinates, cells)),
  setFlag: coordinates => dispatch(setFlag(coordinates)),
  gameOver: () => dispatch(gameOver())
});

const mapStateToProps = state => {
  return {
    cells: getCells(state)
  };
};

const CellContainer = connect(mapStateToProps, mapDispatchToProps)(Cell);

export default CellContainer;
