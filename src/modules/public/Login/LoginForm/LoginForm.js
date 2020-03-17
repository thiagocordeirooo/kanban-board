import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import LoginFormView from "./LoginFormView";
import { useFormik } from "formik";

import { addAuthorization } from "_common/services/Api";

import * as Yup from "yup";
import axios from "axios";

const LoginForm = () => {
  const location = useLocation();
  const history = useHistory();

  const handleLogin = async values => {
    try {
      const { data } = await axios.post("/auth/login", values);
      localStorage.setItem("auth", JSON.stringify(data));
      addAuthorization();

      let { from } = location.state || { from: { pathname: "/board" } };
      history.replace(from);
    } catch ({ response }) {
      const { data } = response;
      if (data.message) {
        alert(data.message);
      }
    }
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
