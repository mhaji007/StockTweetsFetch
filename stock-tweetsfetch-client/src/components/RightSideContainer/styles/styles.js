import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  container: {
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    height: "100vh",
    overflowX: "hidden",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));
