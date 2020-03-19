import { Card, CardContent, CardHeader, IconButton, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import useStyles from "./TaskStyle";

const TaskView = ({ task, provided, snapshot }) => {
  const classes = useStyles();
  return (
    <Card
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={classes.root}
      style={{ ...provided.draggableProps.style }}>
      <CardHeader
        title={task.name}
        action={
          <IconButton aria-label="editar">
            <EditIcon />
          </IconButton>
        }></CardHeader>
      <CardContent>
        <Typography noWrap>{task.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default TaskView;
