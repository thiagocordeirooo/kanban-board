import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3)
  },
  fields: {
    margin: theme.spacing(-1),
    marginBottom: theme.spacing(2),
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  buttonFullWidth: {
    width: "100%"
  }
}));

export default useStyles;
