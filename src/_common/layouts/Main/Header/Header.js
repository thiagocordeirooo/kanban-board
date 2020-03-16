import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ExitToApp from "@material-ui/icons/ExitToApp";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleLogoff = () => {
    if (window.confirm("Tem certeza que deseja sair da aplicação?")) {
      localStorage.removeItem("auth");
      history.replace(from);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Kanban Board App
        </Typography>

        <IconButton
          onClick={handleLogoff}
          style={{ marginLeft: "auto" }}
          edge="start"
          color="inherit"
          aria-label="menu">
          <ExitToApp />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
