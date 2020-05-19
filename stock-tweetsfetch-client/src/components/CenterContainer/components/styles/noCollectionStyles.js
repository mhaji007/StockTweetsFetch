import { makeStyles } from "@material-ui/core/styles";

const emptyStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(20),
  },
  root: {
    fontWeight: 600,
  },
}));

export default emptyStyles;
