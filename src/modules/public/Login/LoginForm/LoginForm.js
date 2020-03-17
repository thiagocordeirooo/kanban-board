import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import LoginFormView from "./LoginFormView";
import { useFormik } from "formik";

import * as Yup from "yup";

const LoginForm = () => {
  const location = useLocation();
  const history = useHistory();

  let { from } = location.state || { from: { pathname: "/board" } };

  const handleLogin = values => {
    alert(JSON.stringify(values, null, 2));
    // localStorage.setItem("auth", "{}");
    // history.replace(from);
  };

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("E-mail inválido.")
        .required("Campo obrigatório."),
      password: Yup.string()
        .max(10)
        .required("Campo obrigatório.")
    }),
    onSubmit: handleLogin
  });

  return <LoginFormView {...{ loginForm }} />;
};

export default LoginForm;
