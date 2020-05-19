import React, { useState } from "react";

// material ui imports
import { Grid, Paper, Drawer } from "@material-ui/core";
import { omit } from "lodash";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import Hidden from "@material-ui/core/Hidden";

// Custom imports
import {
  LeftContainer,
  CenterContainer,
  RightContainer,
  Appbar,
} from "../components";
import { getSymbolMap } from "../utils/mapper";
import { getData } from "../utils/api/getData";
import { homeStyles } from "./styles/homeStyles";

// Home Screen - the main component - all main components are displayed/rendered here
export default function HomeScreen() {
  const classes = homeStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  // Define different states
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [activeSymbol, setActiveSymbol] = useState("");
  const [master, setMaster] = useState({});
  const selection = master[activeSymbol];

  // Used for opening drawer
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Used for closing drawer
  const handleClose = () => {
    setOpen(false);
  };

  // toggleDrawer function is used for open & close drawer on small screens
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // handleSearch function is used for getting data from API
  const handleSearch = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // get data is the method in utils subfolder api
    // this method is fetching data using post call
    const requests = getData(userInput);
    Promise.all(requests).then((data) => {
      // getSymbolMap function is used for mapping through symbols
      const newMap = getSymbolMap(data);
      setMaster({ ...master, ...newMap });
      setUserInput("");
      setIsLoading(false);
    });
  };

  // Deletes symbol from right side bar
  const removeSymbol = (id) => {
    const newMap = omit(master, id);
    setMaster(newMap);
    if (id === activeSymbol) {
      setActiveSymbol("");
    }
  };
  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <Hidden smDown>
          <Grid item md={3} sm={4} xs={12}>
            <Paper elevation={3}>
              <LeftContainer />
            </Paper>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item md={12} sm={12} xs={12}>
            <Appbar toggleDrawer={toggleDrawer} />
            {/* A material ui component displayed on small screens and hidden on large screens */}
            <Drawer
              anchor="left"
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              <LeftContainer />
            </Drawer>
          </Grid>
        </Hidden>
        <Grid item md={6} sm={12} xs={12}>
          <Paper elevation={1}>
            <CenterContainer
              open={open}
              master={master}
              selection={selection}
            />
          </Paper>
        </Grid>
        <Grid item md={3}>
          <Paper elevation={3}>
            <RightContainer
              activeSymbol={activeSymbol}
              isLoading={isLoading}
              handleSearch={handleSearch}
              master={master}
              open={open}
              setOpen={setOpen}
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
              state={state}
              userInput={userInput}
              removeSymbol={removeSymbol}
              setUserInput={setUserInput}
              setActiveSymbol={setActiveSymbol}
            />
          </Paper>
        </Grid>
        <Hidden mdUp>
          <div className={classes.speedDial}>
            {/* A material ui component displayed on small screens and hidden on large screens */}
            <SpeedDial
              ariaLabel="SpeedDial example"
              className={classes.speedDial}
              hidden={false}
              icon={<SpeedDialIcon />}
              onClick={() => handleClickOpen()}
              open={false}
              direction={"down"}
            ></SpeedDial>
          </div>
        </Hidden>
      </Grid>
    </React.Fragment>
  );
}
