import React, { useEffect } from "react";
import LaneView from "./LaneView";
import axios from "axios";
import { BOARD_SET_TASKS_LANE } from "store/reducers/board";
import { useDispatch } from "react-redux";
import createAction from "store/createAction";

const Lane = ({ lane }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(`/lanes/${lane.id}/tasks`);

      dispatch(createAction(BOARD_SET_TASKS_LANE, { laneId: lane.id, tasks: data }));
    };

    fetchTasks();
  }, [dispatch, lane.id]);

  return <LaneView {...{ lane }} />;
};

export default Lane;
