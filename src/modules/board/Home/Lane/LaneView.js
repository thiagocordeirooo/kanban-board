import React from "react";
import { Typography, CircularProgress, IconButton, Grid, Tooltip } from "@material-ui/core";
import useStyles from "./LaneStyle";
import Task from "./Task";
import AddIcon from "@material-ui/icons/Add";

const LaneView = ({ loading, lane, handleAddTask }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="space-between" alignItems="center" className={classes.laneHeader}>
        <Typography variant="h6">{lane.name}</Typography>

        <Tooltip title="Adicionar tarefa">
          <IconButton color="inherit" aria-label="adicionar" onClick={handleAddTask}>
            <AddIcon color="inherit" />
          </IconButton>
        </Tooltip>
      </Grid>
      {/* <LaneHeader /> */}

      <div>
        {loading && <CircularProgress />}

        {!loading && lane.tasks.map(task => <Task key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default LaneView;
