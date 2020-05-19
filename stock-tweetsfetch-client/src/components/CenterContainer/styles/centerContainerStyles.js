import { makeStyles } from "@material-ui/core/styles";

export const centerContainerStyles = makeStyles((theme) => ({
  container: {
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      height: "120vh",
    },
    overflowX: "hidden",
  },
}));
