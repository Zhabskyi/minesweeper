import { connect } from "react-redux";
import Controlls from "../components/controls/Controls";
import { loadGrid } from "../store/board";
import { getFlagsCount, getBombsCount } from "../store/board";

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(loadGrid())
});

const mapStateToProps = state => {
  return {
    flagsCount: getFlagsCount(state),
    bombsCount: getBombsCount(state)
  };
};

const ControllsContainer = connect(mapStateToProps, mapDispatchToProps)(Controlls);

export default ControllsContainer;
