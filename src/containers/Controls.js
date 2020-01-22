import { connect } from "react-redux";
import Controlls from "../components/controls/Controls";
import {  } from "../store/controlPanel";

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => {
  return {};
};

const ControllsContainer = connect(mapStateToProps, mapDispatchToProps)(Controlls);

export default ControllsContainer;
