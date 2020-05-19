import React from "react";

import Typography from "@material-ui/core/Typography";
import footerStyles from "./styles/footerStyles";

function Footer({ tweetCount }) {
  const classes = footerStyles();

  return (
    <div
      className={classes.footer}
      style={{
        position: "fixed",
        bottom: "0px",
        width: "100%",
        background: "#f3f3f3",
      }}
    >
      <Typography color="textSecondary" variant="body1">
        {`Total Tweets: ${tweetCount}`}
      </Typography>
    </div>
  );
}

export default Footer;
