import PropTypes from "prop-types";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import MainLayout from "_common/layouts/Main";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const auth = localStorage.getItem("auth");

  if (auth) {
    return (
      <Route
        {...rest}
        render={matchProps => (
          <MainLayout>
            <Component {...matchProps} />
          </MainLayout>
        )}
      />
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: "/public/login",
          state: { from: location }
        }}></Redirect>
    );
  }
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default PrivateRoute;
