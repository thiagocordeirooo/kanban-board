import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import PageTitle from "_common/components/PageTitle";
import Lane from "./Lane";
import useStyles from "./HomeStyle";
import TaskDialog from "./TaskDialog";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const HomeView = ({ loading, lanes, handleDragEnd }) => {
  const classes = useStyles();

  return (
    <>
      <PageTitle
        title="Board"
        primaryAction={
          <Fab color="primary">
            <AddIcon />
          </Fab>
        }
      />

      <div className={classes.content}>
        <DragDropContext onDragEnd={handleDragEnd}>
          {lanes.map(lane => (
            <Droppable droppableId={lane.id} key={lane.id}>
              {(provided, snapshot) => <Lane lane={lane} provided={provided} snapshot={snapshot} />}
            </Droppable>
          ))}
        </DragDropContext>
      </div>

      <TaskDialog />
    </>
  );
};

export default HomeView;
