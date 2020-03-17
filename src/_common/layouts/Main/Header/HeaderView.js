import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ExitToApp from "@material-ui/icons/ExitToApp";
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

const Header = ({ userName, handleLogoff }) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Kanban Board App
        </Typography>

        <Typography style={{ marginLeft: "auto", marginRight: "16px" }}>{userName}</Typography>

        <Tooltip title="Sair">
          <IconButton onClick={handleLogoff} edge="start" color="inherit" aria-label="menu">
            <ExitToApp />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
