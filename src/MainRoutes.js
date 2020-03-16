import React from "react";

import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

// import PageNotFound from "_common/components/PageNotFound";
import LazyLoadingComponent from "_common/components/LazyLoadingComponent";

const PageNotFound = React.lazy(() => import("_common/components/PageNotFound"));

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/board" />

        <Route component={() => <span>Board</span>} path="/board" />

        {/* page not found */}
        <Route component={LazyLoadingComponent(PageNotFound)} path="/not-found" />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
