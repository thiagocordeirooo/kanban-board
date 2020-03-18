import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import PageTitle from "_common/components/PageTitle";
import Lane from "./Lane";
import useStyles from "./HomeStyle";
import TaskDialog from "./TaskDialog";

const HomeView = ({ loading, lanes }) => {
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
        {lanes.map(lane => (
          <Lane key={lane.id} lane={lane} />
        ))}
      </div>

      <TaskDialog />
    </>
  );
};

export default HomeView;
