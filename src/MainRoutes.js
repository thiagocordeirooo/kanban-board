import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LazyLoadingComponent from "_common/components/LazyLoadingComponent";
import PrivateRoute from "_common/components/PrivateRoute/PrivateRoute";

const PageNotFound = React.lazy(() => import("_common/components/PageNotFound"));
const PublicRoutes = React.lazy(() => import("modules/public/PublicRoutes"));
const BoardRoutes = React.lazy(() => import("modules/board/BoardRoutes"));

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/board" />

        {/* private routes */}
        <PrivateRoute component={LazyLoadingComponent(BoardRoutes)} path="/board" />

        {/* public routes */}
        <Route component={LazyLoadingComponent(PublicRoutes)} path="/public" />

        {/* page not found */}
        <Route component={LazyLoadingComponent(PageNotFound)} path="/not-found" />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
