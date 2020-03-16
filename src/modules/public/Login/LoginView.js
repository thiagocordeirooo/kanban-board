import { Card, CardContent, CardMedia, Divider, Link, Typography } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import LoginForm from "./LoginForm";
import useStyles from "./LoginStyle";

const LoginView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <LockIcon className={classes.icon} />
          <Typography gutterBottom variant="h3">
            Entrar
          </Typography>

          <LoginForm />

          <Divider className={classes.divider} />
          <Link
            align="center"
            color="secondary"
            component={RouterLink}
            to="/public/register"
            underline="hover"
            variant="subtitle2">
            Ainda não tem uma conta?
          </Link>
        </CardContent>
        <CardMedia className={classes.media} image="/assets/images/bg-login.jpg" title="Kanban Board">
          <Typography variant="h5" color="inherit">
            Kanban Board
          </Typography>
        </CardMedia>
      </Card>
    </div>
  );
};

export default LoginView;
