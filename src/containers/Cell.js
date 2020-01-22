import { connect } from "react-redux";
import Cell from "../components/cell/Cell";
import { openCell, setFlag, gameOver } from "../store/board";

const mapDispatchToProps = dispatch => ({
  openCell: coordinates => dispatch(openCell(coordinates)),
  setFlag: coordinates => dispatch(setFlag(coordinates)),
  gameOver: () => dispatch(gameOver())
});

const mapStateToProps = state => {
  return {};
};

const CellContainer = connect(mapStateToProps, mapDispatchToProps)(Cell);

export default CellContainer;
