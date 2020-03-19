import React from "react";
import { Typography, CircularProgress, IconButton, Grid, Tooltip } from "@material-ui/core";
import useStyles from "./LaneStyle";
import Task from "./Task";
import AddIcon from "@material-ui/icons/Add";
import { Draggable } from "react-beautiful-dnd";

const LaneView = ({ loading, lane, handleAddTask, provided, snapshot }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} ref={provided.innerRef}>
      <Grid container justify="space-between" alignItems="center" className={classes.laneHeader}>
        <Typography variant="h6">
          {lane.name} {!!lane.tasks && `(${lane.tasks.length})`}
        </Typography>

        <Tooltip title="Adicionar tarefa">
          <IconButton color="inherit" aria-label="adicionar" onClick={handleAddTask}>
            <AddIcon color="inherit" />
          </IconButton>
        </Tooltip>
      </Grid>
      {/* <LaneHeader /> */}

      <div style={{ display: "flex", flexDirection: "column", margin: "0 8px" }}>
        {loading && (
          <Grid container justify="center">
            <CircularProgress />
          </Grid>
        )}

        {!loading &&
          lane.tasks.map((task, index) => (
            <Draggable key={task.id} index={index} draggableId={task.id}>
              {(provided, snapshot) => <Task provided={provided} snapshot={snapshot} task={task} />}
            </Draggable>
          ))}
      </div>
    </div>
  );
};

export default LaneView;
