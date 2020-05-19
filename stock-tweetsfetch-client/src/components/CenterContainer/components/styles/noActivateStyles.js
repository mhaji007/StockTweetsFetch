import { makeStyles } from "@material-ui/core/styles";

const noActivateStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginTop: "100px",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(20),
  },
  root: {
    fontWeight: 600,
  },
}));

export default noActivateStyles;
