export const getCells = state => state.board.cells;
export const getOverlapCells = state => state.board.isCellOpen;
export const getOverlapFlags = state => state.board.isFlag;
export const getFlagsCount = state => state.board.flagsCount;
export const getBombsCount = state => state.board.bombs;

