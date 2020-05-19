import React from "react";
import { Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { useStyles } from "./styles/leftbarStyle";
const Leftside = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src={require("../../assets/twitterSplash.gif")}
        width={200}
        height={200}
        alt="loader"
      />
      <Link to="/home" className={classes.alink} active>
        <div className={classes.link} style={{ background: "#00a4e5" }}>
          <TwitterIcon fontSize="large" color="secondary" />
          <Typography variant="h5">Home</Typography>
        </div>
      </Link>

      <Link to="/" className={classes.alink}>
        <div className={classes.link}>
          <ExitToAppIcon fontSize="large" color="secondary" />
          <Typography variant="h5">Logout</Typography>
        </div>
      </Link>
    </div>
  );
};

export default Leftside;
