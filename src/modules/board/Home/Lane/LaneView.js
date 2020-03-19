import React from "react";
import { Typography, CircularProgress, IconButton, Grid, Tooltip } from "@material-ui/core";
import useStyles from "./LaneStyle";
import Task from "./Task";
import AddIcon from "@material-ui/icons/Add";
import { Draggable } from "react-beautiful-dnd";

const LaneView = ({ lane, handleAddTask, provided, handleOpenNewLaneDialog }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} ref={provided.innerRef}>
      <Grid container justify="space-between" alignItems="center" className={classes.laneHeader}>
        <Typography className={classes.laneTitle} variant="h6" onClick={() => handleOpenNewLaneDialog(lane.id)}>
          {lane.name}
          {!!lane.tasks && ` (${lane.tasks.length})`}
        </Typography>

        <Tooltip title="Adicionar tarefa">
          <IconButton color="inherit" aria-label="adicionar" onClick={handleAddTask}>
            <AddIcon color="inherit" />
          </IconButton>
        </Tooltip>
      </Grid>

      <div style={{ padding: "0 16px" }}>
        {!lane.tasks && (
          <Grid container justify="center">
            <CircularProgress />
          </Grid>
        )}

        {lane.tasks &&
          lane.tasks.map((task, index) => (
            <Draggable key={task.id} index={index} draggableId={task.id.toString()}>
              {(provided, snapshot) => <Task task={task} provided={provided} snapshot={snapshot} />}
            </Draggable>
          ))}
      </div>
    </div>
  );
};

export default LaneView;
