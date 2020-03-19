import React from "react";
import TaskView from "./TaskView";

const Task = ({ task, provided, snapshot }) => {
  return <TaskView {...{ task, provided, snapshot }} />;
};

export default Task;
