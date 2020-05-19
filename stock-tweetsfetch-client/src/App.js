import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HomeScreen, LoginScreen } from "./Screens";
import { appStyles, theme } from "./styles/appStyles";

function App() {
  const [splash, setSplash] = React.useState(true);
  const classes = appStyles();

  React.useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 5000);
  }, []);
  //showing splash screen for 5 sec
  if (splash)
    return (
      <React.Fragment>
        <div className={classes.splashContainer}>
          <img
            src={require("./assets/twitterSplash.gif")}
            width={200}
            height={200}
            alt="loader"
          />
        </div>
      </React.Fragment>
    );
  else
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* used react-router-dom for routing */}
          <Router>
            <Switch>
              <Route exact path="/" component={LoginScreen} />
              <Route exact path="/home" component={HomeScreen} />
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    );
}

export default App;
