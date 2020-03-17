import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import createAction from "store/createAction";
import { AUTH_SET_USER } from "store/reducers/auth";
import { SNACKBAR_OPEN } from "store/reducers/snackbar";
import * as Yup from "yup";
import { addAuthorizationApi } from "_common/services/Api";
import LoginFormView from "./LoginFormView";

const LoginForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const handleLogin = async values => {
    try {
      const { data } = await axios.post("/auth/login", values);
      localStorage.setItem("auth", JSON.stringify(data));
      addAuthorizationApi();

      dispatch(createAction(AUTH_SET_USER, data));

      let { from } = location.state || { from: { pathname: "/board" } };
      history.replace(from);
    } catch ({ response }) {
      const { data } = response;
      if (data.message) {
        dispatch(createAction(SNACKBAR_OPEN, data.message));
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
