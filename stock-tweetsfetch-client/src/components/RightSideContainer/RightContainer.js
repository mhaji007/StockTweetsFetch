import React from "react";

//import different components from material ui
import { Grid } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import Hidden from "@material-ui/core/Hidden";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

//custom imports all the files i created
import { useStyles } from "./styles/styles";
import { getTotalTweetCount } from "../../utils/mapper";
import { Footer, Search, SymbolList } from "./components";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
//props coming from parent component
export default function RightContainer({
  master,
  activeSymbol,
  setActiveSymbol,
  removeSymbol,
  isLoading,
  handleSearch,
  handleSidebarClose,
  userInput,
  setUserInput,
  open,
  setOpen,
  handleClose,
  handleClickOpen,
}) {
  const tweetCount = getTotalTweetCount(master);
  const classes = useStyles();

  return (
    ///using griding system of material ui
    <div className={classes.container}>
      <Grid container align="center">
        <Hidden smDown>
          <Grid item xs={11}>
            <React.Fragment>
              <div>
                <Search
                  handleSearch={handleSearch}
                  handleSidebarClose={handleSidebarClose}
                  userInput={userInput}
                  setUserInput={setUserInput}
                  isLoading={isLoading}
                />
                <SymbolList
                  activeSymbol={activeSymbol}
                  isLoading={isLoading}
                  master={master}
                  removeSymbol={removeSymbol}
                  setActiveSymbol={setActiveSymbol}
                  handleClose={handleClose}
                />
                <Footer tweetCount={tweetCount} />
              </div>
            </React.Fragment>
          </Grid>
        </Hidden>

        <React.Fragment>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Search
              handleSearch={handleSearch}
              handleSidebarClose={handleSidebarClose}
              userInput={userInput}
              setUserInput={setUserInput}
              isLoading={isLoading}
            />
            <SymbolList
              activeSymbol={activeSymbol}
              isLoading={isLoading}
              master={master}
              removeSymbol={removeSymbol}
              setActiveSymbol={setActiveSymbol}
              handleClose={handleClose}
            />
            <Footer tweetCount={tweetCount} />
          </Dialog>
        </React.Fragment>
      </Grid>
    </div>
  );
}
