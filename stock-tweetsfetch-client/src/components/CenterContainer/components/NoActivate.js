import React from "react";
import Typography from "@material-ui/core/Typography";

import { getSymbolCount } from "../../../utils/mapper";

import noActivateStyles from "./styles/noActivateStyles";

const NoActivate = ({ master }) => {
  const classes = noActivateStyles();
  const symbolCount = getSymbolCount(master);

  return (
    <div className={classes.container}>
      <Typography
        align="center"
        className={classes.root}
        color="textSecondary"
        gutterBottom
        variant="h4"
      >
        {`Tweets are available for ${symbolCount}`}
      </Typography>
    </div>
  );
};

export default NoActivate;
