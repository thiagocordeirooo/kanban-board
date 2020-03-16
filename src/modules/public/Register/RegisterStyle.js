import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(6, 2)
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: "100%",
    overflow: "unset",
    display: "flex",
    position: "relative",
    "& > *": {
      flexGrow: 1,
      flexBasis: "50%",
      width: "50%"
    }
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  icon: {
    backgroundImage: "linear-gradient(180deg, #ffa726 0%, #f57c00 100%)",
    color: "#fff",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: "absolute",
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  registerForm: {
    marginTop: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  person: {
    marginTop: theme.spacing(2),
    display: "flex"
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

export default useStyles;
