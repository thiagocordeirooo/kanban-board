import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import PageTitle from "_common/components/PageTitle";
import useStyles from "./HomeStyle";
import Lane from "./Lane";
import LaneDialog from "./LaneDialog";
import TaskDialog from "./TaskDialog";

const HomeView = ({
  loading,
  lanes,
  handleDragEnd,
  newLaneDialogOpen,
  handleOpenNewLaneDialog,
  handleCloseNewLaneDialog
}) => {
  const classes = useStyles();
  return (
    <>
      <PageTitle
        title="Board"
        primaryAction={
          <Fab color="primary" onClick={handleOpenNewLaneDialog}>
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
      <LaneDialog open={newLaneDialogOpen} handleClose={handleCloseNewLaneDialog} />
    </>
  );
};

export default HomeView;
