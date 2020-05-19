import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { blue, grey } from "@material-ui/core/colors";

export const appStyles = makeStyles(() => ({
  splashContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}));

// Define primary and secondary colors
export const theme = createMuiTheme({
  palette: {
    primary: { main: blue[400] },
    secondary: { main: grey[900] },
  },
});
