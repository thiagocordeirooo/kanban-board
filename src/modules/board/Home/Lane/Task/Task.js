import React from "react";
import TaskView from "./TaskView";

const Task = ({ task }) => {
  return <TaskView {...{ task }} />;
};

export default Task;
