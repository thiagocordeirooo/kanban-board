import { combineReducers, createStore } from "redux";
import auth from "./reducers/auth";
import snackbar from "./reducers/snackbar";

const rootReducer = combineReducers({ auth, snackbar });

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
