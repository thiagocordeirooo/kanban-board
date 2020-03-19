import React, { useEffect, useState } from "react";
import LaneView from "./LaneView";
import axios from "axios";
import { BOARD_SET_TASKS_LANE, BOARD_OPEN_TASK_DIALOG } from "store/reducers/board";
import { useDispatch } from "react-redux";
import createAction from "store/createAction";

const Lane = ({ lane, provided, handleOpenNewLaneDialog }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(`/lanes/${lane.id}/tasks`);
      dispatch(createAction(BOARD_SET_TASKS_LANE, { laneId: lane.id, tasks: data }));
    };

    fetchTasks();
  }, [dispatch, lane.id]);

  const handleAddTask = () => {
    dispatch(createAction(BOARD_OPEN_TASK_DIALOG, { laneId: lane.id }));
  };

  return <LaneView {...{ lane, handleAddTask, provided, handleOpenNewLaneDialog }} />;
};

export default Lane;
