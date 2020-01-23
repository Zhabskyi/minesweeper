import { connect } from "react-redux";
import Controlls from "../components/controls/Controls";
import { loadGrid } from "../store/board";
import { getFlagsCount, getBombsCount } from "../store/board";
import { startTimer, resetTimer, getTime } from "../store/infoPanel";


const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(loadGrid()),
  startTimer: () => dispatch(startTimer()),
  resetTimer: () => dispatch(resetTimer())
});

const mapStateToProps = state => {
  return {
    flagsCount: getFlagsCount(state),
    bombsCount: getBombsCount(state),
    time: getTime(state)
  };
};

const ControllsContainer = connect(mapStateToProps, mapDispatchToProps)(Controlls);

export default ControllsContainer;
