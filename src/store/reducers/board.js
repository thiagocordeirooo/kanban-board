export const BOARD_SET_LOADING = "BOARD/SET_LOADING";
export const BOARD_SET_LANES = "BOARD/SET_LANES";
export const BOARD_SET_TASKS_LANE = "BOARD/SET_TASKS_LANE";

export const BOARD_ADD_TASKS_LANE = "BOARD/ADD_TASKS_LANE";
export const BOARD_ADD_LANE = "BOARD/ADD_LANE";

export const BOARD_OPEN_TASK_DIALOG = "BOARD/OPEN_TASK_DIALOG";
export const BOARD_CLOSE_TASK_DIALOG = "BOARD/CLOSE_TASK_DIALOG";

const INITIAL_STATE = {
  loading: true,
  lanes: [],
  taskDialog: {
    open: false,
    laneId: null,
    taskEdit: null
  }
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
    case BOARD_ADD_TASKS_LANE: {
      const { laneId, task } = action.payload;

      const lanes = state.lanes.map(lane => (lane.id === laneId ? { ...lane, tasks: [task, ...lane.tasks] } : lane));

      return { ...state, lanes };
    }
    case BOARD_ADD_LANE:
      return { ...state, lanes: [...state.lanes, ...action.payload] };
    case BOARD_OPEN_TASK_DIALOG: {
      const { laneId, taskEdit } = action.payload;
      return { ...state, taskDialog: { ...state.taskDialog, open: true, laneId, taskEdit } };
    }
    case BOARD_CLOSE_TASK_DIALOG:
      return { ...state, taskDialog: { ...state.taskDialog, open: false, taskEdit: null } };
    default:
      return state;
  }
};

export default Board;
