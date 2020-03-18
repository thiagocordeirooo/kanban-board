export const BOARD_SET_LOADING = "BOARD/SET_LOADING";
export const BOARD_SET_LANES = "BOARD/SET_LANES";
export const BOARD_SET_TASKS_LANE = "BOARD/SET_TASKS_LANE";

const INITIAL_STATE = {
  loading: true,
  lanes: []
};

const Board = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOARD_SET_LOADING:
      return { ...state, loading: action.payload };
    case BOARD_SET_LANES:
      return { ...state, lanes: action.payload };
    case BOARD_SET_TASKS_LANE: {
      const { laneId, tasks } = action.payload;

      const lanes = state.lanes.map(lane => (lane.id === laneId ? { ...lane, tasks } : lane));

      return { ...state, lanes };
    }
    default:
      return state;
  }
};

export default Board;
