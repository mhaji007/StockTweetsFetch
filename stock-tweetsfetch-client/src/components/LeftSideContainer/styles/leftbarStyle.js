import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  },
  link: {
    display: "flex",
    border: "1px solid #00a4e5",
    borderRadius: "20px",
    justifyContent: "space-evenly",
    "&:hover": {
      background: theme.palette.primary.main,
    },
    maxWidth: "80%",
    minWidth: "60%",
    alignItems: "center",
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  alink: {
    width: "100%",
    textDecoration: "none",
  },
}));
