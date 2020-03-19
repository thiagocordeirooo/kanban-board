import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import createAction from "store/createAction";
import { BOARD_ADD_LANE } from "store/reducers/board";
import { SNACKBAR_OPEN_SUCCESS } from "store/reducers/snackbar";
import * as Yup from "yup";
import LaneDialogView from "./LaneDialogView";

const LaneDialog = ({ open, handleClose }) => {
  const dispatch = useDispatch();

  const handleSave = async values => {
    const { data } = await axios.post("/lanes", values);

    dispatch(createAction(BOARD_ADD_LANE, data));
    dispatch(createAction(SNACKBAR_OPEN_SUCCESS));
    handleClose();
  };

  const formLane = useFormik({
    initialValues: { name: "" },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .max(20)
        .required()
    }),
    onSubmit: handleSave
  });

  return <LaneDialogView {...{ open, handleClose, formLane }} />;
};
export default LaneDialog;
