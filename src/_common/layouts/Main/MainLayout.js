import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Header from "./Header";

const useStyles = makeStyles(theme => ({
  main: {
    padding: theme.spacing(3),
    height: "calc(100% - 48px)"
  }
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default MainLayout;
