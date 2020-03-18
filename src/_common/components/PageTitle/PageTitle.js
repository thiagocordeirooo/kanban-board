import React from "react";
import PageTitleView from "./PageTitleView";

const PageTitle = ({ title, primaryAction }) => {
  return <PageTitleView {...{ title, primaryAction }} />;
};

export default PageTitle;
