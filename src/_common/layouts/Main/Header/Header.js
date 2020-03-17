import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import createAction from "store/createAction";
import { AUTH_REMOVE_USER } from "store/reducers/auth";
import HeaderView from "./HeaderView";

const Header = () => {
  const dispatch = useDispatch();

  const authRedux = useSelector(({ auth }) => auth);
  const location = useLocation();
  const history = useHistory();

  const handleLogoff = () => {
    if (window.confirm("Tem certeza que deseja sair da aplicação?")) {
      localStorage.removeItem("auth");

      dispatch(createAction(AUTH_REMOVE_USER));

      let { from } = location.state || { from: { pathname: "/" } };
      history.replace(from);
    }
  };

  return <HeaderView userName={authRedux.user.name} handleLogoff={handleLogoff} />;
};

export default Header;
