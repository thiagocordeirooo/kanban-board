import { Card, CardContent, CardMedia, Divider, Link, Typography } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import useStyles from "./RegisterStyle";

const RegisterView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <PersonAddIcon className={classes.icon} />
          <Typography gutterBottom variant="h3">
            Criar uma conta
          </Typography>

          <RegisterForm />

          <Divider className={classes.divider} />
          <Link
            align="center"
            color="secondary"
            component={RouterLink}
            to="/public/login"
            underline="always"
            variant="subtitle2">
            Já tem uma conta?
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

export default RegisterView;
