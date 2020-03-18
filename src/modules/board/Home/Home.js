import React, { useEffect } from "react";
import HomeView from "./HomeView";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import createAction from "store/createAction";

import { BOARD_SET_LOADING, BOARD_SET_LANES } from "store/reducers/board";

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

  return <HomeView loading={boardRedux.loading} lanes={boardRedux.lanes} />;
};

export default Home;
