import React, { useEffect, useState } from "react";
import HomeView from "./HomeView";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import createAction from "store/createAction";

import { BOARD_SET_LOADING, BOARD_SET_LANES, BOARD_SET_TASKS_LANE, BOARD_RESET } from "store/reducers/board";
import { SNACKBAR_OPEN_SUCCESS } from "store/reducers/snackbar";

const Home = () => {
  const dispatch = useDispatch();
  const boardRedux = useSelector(({ board }) => board);

  const [newLaneDialogOpen, setNewLaneDialogOpen] = useState(false);
  const [laneEdit, setLaneEdit] = useState(null);

  useEffect(() => {
    const fetchLanes = async () => {
      const { data } = await axios.get("/lanes");

      dispatch(createAction(BOARD_SET_LOADING, false));
      dispatch(createAction(BOARD_SET_LANES, data));
    };

    fetchLanes();

    return () => dispatch(createAction(BOARD_RESET));
  }, [dispatch]);

  const handleDragEnd = async event => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    const { lanes } = boardRedux;

    const sourceLane = lanes.find(({ id }) => id === +source.droppableId);
    const destinationLane = lanes.find(({ id }) => id === +destination.droppableId);

    const [removedTask] = sourceLane.tasks.splice(source.index, 1);

    removedTask.laneId = destination.droppableId;
    destinationLane.tasks.splice(destination.index, 0, removedTask);

    dispatch(createAction(BOARD_SET_TASKS_LANE, { laneId: source.droppableId, tasks: sourceLane.tasks }));
    dispatch(createAction(BOARD_SET_TASKS_LANE, { laneId: destination.droppableId, tasks: destinationLane.tasks }));

    await axios.put(`/tasks/${removedTask.id}`, removedTask);

    dispatch(createAction(SNACKBAR_OPEN_SUCCESS));
  };

  const handleOpenNewLaneDialog = laneId => {
    if (laneId) {
      const { lanes } = boardRedux;
      const { tasks, ...rest } = lanes.find(({ id }) => id === laneId);
      setLaneEdit(rest);
    } else {
      setLaneEdit(null);
    }

    setNewLaneDialogOpen(true);
  };

  const handleCloseNewLaneDialog = () => {
    setNewLaneDialogOpen(false);
  };

  return (
    <HomeView
      loading={boardRedux.loading}
      lanes={boardRedux.lanes}
      {...{ handleDragEnd, laneEdit, newLaneDialogOpen, handleOpenNewLaneDialog, handleCloseNewLaneDialog }}
    />
  );
};

export default Home;
