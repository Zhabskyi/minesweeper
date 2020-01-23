import { connect } from "react-redux";
import Cell from "../components/cell/Cell";
import { setFlag, gameOver, getCells, openEmptyTiles, isWinner } from "../store/board";
import { stopTimer } from "../store/infoPanel";

const mapDispatchToProps = dispatch => ({
  openCell: (coordinates, cells) =>
    dispatch(openEmptyTiles(coordinates, cells)),
  setFlag: coordinates => dispatch(setFlag(coordinates)),
  gameOver: () => dispatch(gameOver()),
  stopTimer: () => dispatch(stopTimer()),
  isWinner: () => dispatch(isWinner())
});

const mapStateToProps = state => {
  return {
    cells: getCells(state)
  };
};

const CellContainer = connect(mapStateToProps, mapDispatchToProps)(Cell);

export default CellContainer;
