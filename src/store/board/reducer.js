import {
	OPEN_CELL
} from './actionTypes';

const INITIAL_STATE = {
  isCellOpen: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
		case OPEN_CELL:
			return {...state, isCellOpen: true, };
    default:
      return {...state};
  }
}