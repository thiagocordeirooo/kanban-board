import React from "react";
import { Grid, Typography } from "@material-ui/core";

const PageTitleView = ({ title, primaryAction }) => {
  return (
    <Grid container justify="space-between">
      <Typography variant="h4" color="textSecondary">
        {title}
      </Typography>

      {primaryAction}
    </Grid>
  );
};

export default PageTitleView;
