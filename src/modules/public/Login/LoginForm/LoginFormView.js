import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React from "react";
import useStyles from "./LoginFormStyle";

const LoginFormView = () => {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <div className={classes.fields}>
        <TextField fullWidth label="Email" name="email" variant="outlined" />
        <TextField type="password" fullWidth label="Senha" name="password" variant="outlined" />
      </div>

      <Button className={classes.submitButton} color="secondary" size="large" type="submit" variant="contained">
        Entrar
      </Button>
    </form>
  );
};

export default LoginFormView;
