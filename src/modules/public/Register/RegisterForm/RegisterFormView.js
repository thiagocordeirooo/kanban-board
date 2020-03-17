import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React from "react";
import useStyles from "./RegisterFormStyle";

const RegisterFormView = ({ registerForm }) => {
  const classes = useStyles();

  return (
    <form onSubmit={registerForm.handleSubmit} className={classes.root}>
      <div className={classes.fields}>
        <TextField
          fullWidth
          label="Nome"
          name="name"
          variant="outlined"
          value={registerForm.values.name}
          onChange={registerForm.handleChange}
          error={!!registerForm.errors.name}
          helperText={registerForm.errors.name}
        />
        <TextField
          type="email"
          fullWidth
          label="E-mail"
          name="email"
          variant="outlined"
          value={registerForm.values.email}
          onChange={registerForm.handleChange}
          error={!!registerForm.errors.email}
          helperText={registerForm.errors.email}
        />
        <TextField
          type="password"
          fullWidth
          label="Senha"
          name="password"
          variant="outlined"
          value={registerForm.values.password}
          onChange={registerForm.handleChange}
          error={!!registerForm.errors.password}
          helperText={registerForm.errors.password}
        />
        <TextField
          type="password"
          fullWidth
          label="Confirmar Senha"
          name="passwordConfirm"
          variant="outlined"
          value={registerForm.values.passwordConfirm}
          onChange={registerForm.handleChange}
          error={!!registerForm.errors.passwordConfirm}
          helperText={registerForm.errors.passwordConfirm}
        />
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Button
            className={classes.buttonFullWidth}
            color="default"
            size="large"
            variant="contained"
            onClick={registerForm.handleReset}>
            Limpar
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button type="submit" className={classes.buttonFullWidth} color="secondary" size="large" variant="contained">
            Cadastrar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterFormView;
