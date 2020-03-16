import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import LoginFormView from "./LoginFormView";

const LoginForm = () => {
  const location = useLocation();
  const history = useHistory();

  let { from } = location.state || { from: { pathname: "/board" } };

  const handleLogin = () => {
    localStorage.setItem("auth", "{}");
    history.replace(from);
  };

  return <LoginFormView {...{ handleLogin }} />;
};

export default LoginForm;
