import React, { useEffect } from "react";
import HomeView from "./HomeView";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import createAction from "store/createAction";

import { BOARD_SET_LOADING, BOARD_SET_LANES, BOARD_SET_TASKS_LANE } from "store/reducers/board";
import { SNACKBAR_OPEN_SUCCESS } from "store/reducers/snackbar";

const Home = () => {
  const dispatch = useDispatch();
  const boardRedux = useSelector(({ board }) => board);

  useEffect(() => {
    const fetchLanes = async () => {
      const { data } = await axios.get("/lanes");

      dispatch(createAction(BOARD_SET_LOADING, false));
      dispatch(createAction(BOARD_SET_LANES, data));
    };

    fetchLanes();
  }, [dispatch]);

  const handleDragEnd = async event => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    const { lanes } = boardRedux;

    const sourceLane = lanes.find(({ id }) => id === source.droppableId);
    const destinationLane = lanes.find(({ id }) => id === destination.droppableId);

    const [removedTask] = sourceLane.tasks.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceLane.tasks.splice(destination.index, 0, removedTask);
      dispatch(createAction(BOARD_SET_TASKS_LANE, { laneId: sourceLane.id, tasks: sourceLane.tasks }));
    } else {
      removedTask.laneId = destination.droppableId;
      destinationLane.tasks.splice(destination.index, 0, removedTask);
      dispatch(createAction(BOARD_SET_TASKS_LANE, { laneId: destinationLane.id, tasks: destinationLane.tasks }));
    }

    await axios.put(`/tasks/${removedTask.id}`, removedTask);
    dispatch(createAction(SNACKBAR_OPEN_SUCCESS));
  };

  return <HomeView loading={boardRedux.loading} lanes={boardRedux.lanes} handleDragEnd={handleDragEnd} />;
};

export default Home;
