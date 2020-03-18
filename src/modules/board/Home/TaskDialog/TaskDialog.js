import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import createAction from "store/createAction";
import { BOARD_CLOSE_TASK_DIALOG, BOARD_ADD_TASKS_LANE } from "store/reducers/board";
import * as Yup from "yup";
import TaskDialogView from "./TaskDialogView";
import axios from "axios";
import { SNACKBAR_OPEN_SUCCESS } from "store/reducers/snackbar";

const TaskDialog = () => {
  const dispatch = useDispatch();
  const boardRedux = useSelector(({ board }) => board);

  const handleSave = async values => {
    try {
      const { laneId } = boardRedux.taskDialog;
      const newTask = { ...values, laneId };
      const { data } = await axios.post(`/lanes/${laneId}/tasks`, newTask);

      dispatch(createAction(BOARD_ADD_TASKS_LANE, { laneId, task: data }));
      dispatch(createAction(SNACKBAR_OPEN_SUCCESS));
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const taskForm = useFormik({
    initialValues: {
      name: "",
      description: ""
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .max(20)
        .required("Campo obrigatório."),
      description: Yup.string()
        .max(200)
        .required("Campo obrigatório.")
    }),
    onSubmit: handleSave
  });

  const handleClose = () => {
    taskForm.handleReset();
    dispatch(createAction(BOARD_CLOSE_TASK_DIALOG));
  };

  return boardRedux.taskDialog.open ? (
    <TaskDialogView open={boardRedux.taskDialog.open} {...{ handleClose, taskForm }} />
  ) : null;
};

export default TaskDialog;
