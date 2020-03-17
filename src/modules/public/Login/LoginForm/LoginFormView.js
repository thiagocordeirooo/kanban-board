import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React from "react";
import useStyles from "./LoginFormStyle";

const LoginFormView = ({ loginForm }) => {
  const classes = useStyles();

  return (
    <form onSubmit={loginForm.handleSubmit} className={classes.root}>
      <div className={classes.fields}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          variant="outlined"
          value={loginForm.values.email}
          onChange={loginForm.handleChange}
          onBlur={loginForm.handleBlur}
          error={!!loginForm.errors.email}
          helperText={loginForm.errors.email}
        />
        <TextField
          type="password"
          fullWidth
          label="Senha"
          name="password"
          variant="outlined"
          value={loginForm.values.password}
          onChange={loginForm.handleChange}
          onBlur={loginForm.handleBlur}
          error={!!loginForm.errors.password}
          helperText={loginForm.errors.password}
        />
      </div>

      <Button type="submit" className={classes.submitButton} color="secondary" size="large" variant="contained">
        Entrar
      </Button>
    </form>
  );
};

export default LoginFormView;
