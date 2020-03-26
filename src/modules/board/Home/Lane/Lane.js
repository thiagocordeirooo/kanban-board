import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import createAction from "store/createAction";
import { BOARD_OPEN_TASK_DIALOG, BOARD_SET_TASKS_LANE } from "store/reducers/board";
import LaneView from "./LaneView";

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
