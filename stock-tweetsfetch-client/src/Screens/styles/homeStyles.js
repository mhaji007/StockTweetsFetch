import { makeStyles } from "@material-ui/core/styles";

export const homeStyles = makeStyles(() => ({
  layoutRoot: {
    display: "flex",
    flex: 1,
  },
  speedDial: {
    position: "fixed",
    bottom: "15px",
    right: "15px",
  },
}));
