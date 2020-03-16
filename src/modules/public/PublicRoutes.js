import React from "react";
import { Route } from "react-router-dom";
import LazyLoadingComponent from "_common/components/LazyLoadingComponent";

const LoginComponent = React.lazy(() => import("modules/public/Login"));
const RegisterComponent = React.lazy(() => import("modules/public/Register"));

const PublicRoutes = ({ match: { url } }) => {
  return (
    <>
      <Route path={`${url}/login`} component={LazyLoadingComponent(LoginComponent)} />
      <Route path={`${url}/register`} component={LazyLoadingComponent(RegisterComponent)} />
    </>
  );
};

export default PublicRoutes;
