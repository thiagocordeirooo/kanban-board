import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import createAction from "store/createAction";
import { BOARD_ADD_LANE, BOARD_UPDATE_LANE_NAME } from "store/reducers/board";
import { SNACKBAR_OPEN_SUCCESS } from "store/reducers/snackbar";
import Yup from "_common/utils/YupValidator";
import LaneDialogView from "./LaneDialogView";

const LaneDialog = ({ laneEdit, handleClose }) => {
  const dispatch = useDispatch();

  const handleSave = async values => {
    let resp = {};

    if (values.id) {
      resp = await axios.put(`/lanes/${values.id}`, values);
    } else {
      resp = await axios.post("/lanes", values);
    }

    dispatch(createAction(SNACKBAR_OPEN_SUCCESS));

    setTimeout(() => {
      dispatch(createAction(values.id ? BOARD_UPDATE_LANE_NAME : BOARD_ADD_LANE, resp.data));
      handleClose();
    }, 500);
  };

  const formLane = useFormik({
    initialValues: laneEdit || { name: "" },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .max(20)
        .required()
    }),
    onSubmit: handleSave
  });

  return <LaneDialogView {...{ handleClose, formLane }} />;
};
export default LaneDialog;
