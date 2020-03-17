import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

const SnackbarView = ({ open, message, handleClose }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      message={message}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
};

export default SnackbarView;
