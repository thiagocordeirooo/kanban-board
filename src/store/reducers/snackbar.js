export const SNACKBAR_OPEN = "SNACKBAR/OPEN";
export const SNACKBAR_OPEN_SUCCESS = "SNACKBAR/OPEN_SUCCESS";
export const SNACKBAR_CLOSE = "SNACKBAR/CLOSE";

const INITIAL_STATE = {
  open: false,
  message: undefined
};

const Snackbar = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SNACKBAR_OPEN:
      return { ...state, open: true, message: action.payload };
    case SNACKBAR_OPEN_SUCCESS:
      return { ...state, open: true, message: "Operação efetuada com sucesso!" };
    case SNACKBAR_CLOSE:
      return { ...state, open: false, message: undefined };
    default:
      return state;
  }
};

export default Snackbar;
