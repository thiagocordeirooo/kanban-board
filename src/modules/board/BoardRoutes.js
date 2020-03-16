import React from "react";
import { Route } from "react-router-dom";
import LazyLoadingComponent from "_common/components/LazyLoadingComponent";

const HomeComponent = React.lazy(() => import("modules/board/Home"));

const PublicRoutes = ({ match: { url } }) => {
  return (
    <>
      <Route path={`${url}/`} component={LazyLoadingComponent(HomeComponent)} />
    </>
  );
};

export default PublicRoutes;
