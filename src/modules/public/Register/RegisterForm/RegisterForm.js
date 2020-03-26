import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import createAction from "store/createAction";
import { AUTH_SET_USER } from "store/reducers/auth";
import { SNACKBAR_OPEN, SNACKBAR_OPEN_SUCCESS } from "store/reducers/snackbar";
import { addAuthorizationApi } from "_common/services/Api";
import Yup from "_common/utils/YupValidator";
import RegisterFormView from "./RegisterFormView";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const handleRegister = async values => {
    try {
      const { data } = await axios.post("/auth/register", values);

      dispatch(createAction(SNACKBAR_OPEN_SUCCESS));

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

  const registerForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: ""
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(4)
        .max(20)
        .required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(4)
        .max(10)
        .required(),
      passwordConfirm: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "As senhas não conferem.")
    }),
    onSubmit: handleRegister
  });

  return <RegisterFormView {...{ registerForm }} />;
};

export default RegisterForm;
