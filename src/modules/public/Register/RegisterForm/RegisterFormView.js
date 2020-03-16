import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useStyles from "./RegisterFormStyle";

const RegisterFormView = () => {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <div className={classes.fields}>
        <TextField fullWidth label="Nome" name="name" variant="outlined" />
        <TextField type="email" fullWidth label="E-mail" name="email" variant="outlined" />
        <TextField type="password" fullWidth label="Senha" name="password" variant="outlined" />
      </div>

      <Button className={classes.submitButton} color="secondary" size="large" type="submit" variant="contained">
        Cadastrar
      </Button>
    </form>
  );
};

export default RegisterFormView;
