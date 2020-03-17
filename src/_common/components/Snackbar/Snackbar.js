import React from "react";
import { useDispatch, useSelector } from "react-redux";
import createAction from "store/createAction";
import { SNACKBAR_CLOSE } from "store/reducers/snackbar";
import SnackbarView from "./SnackbarView";

const Snackbar = () => {
  const dispatch = useDispatch();
  const snackbarRedux = useSelector(({ snackbar }) => snackbar);

  const handleClose = () => dispatch(createAction(SNACKBAR_CLOSE));

  return <SnackbarView open={snackbarRedux.open} message={snackbarRedux.message} handleClose={handleClose} />;
};

export default Snackbar;
