import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./LaneStyle";

const LaneView = ({ lane }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.laneHeader}>
        <Typography variant="h6">{lane.name}</Typography>
      </div>
    </div>
  );
};

export default LaneView;
