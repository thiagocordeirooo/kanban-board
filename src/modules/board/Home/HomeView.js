import React from "react";
import PageTitle from "_common/components/PageTitle";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const HomeView = () => {
  return (
    <>
      <PageTitle
        title="Board"
        primaryAction={
          <IconButton color="primary">
            <AddIcon />
          </IconButton>
        }
      />
    </>
  );
};

export default HomeView;
