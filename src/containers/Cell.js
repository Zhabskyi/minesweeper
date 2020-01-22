import { connect } from "react-redux";
import Cell from "../components/cell/Cell";
import { openCell, setFlag } from "../store/board";

const mapDispatchToProps = dispatch => ({
  openCell: coordinates => dispatch(openCell(coordinates)),
  setFlag: coordinates => dispatch(setFlag(coordinates))
});

const mapStateToProps = state => {
  return {};
};

const CellContainer = connect(mapStateToProps, mapDispatchToProps)(Cell);

export default CellContainer;
