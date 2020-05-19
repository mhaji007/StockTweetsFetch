import React from "react";
import Typography from "@material-ui/core/Typography";

import searchImage from "../../../assets/search.png";
import noCollectionStyles from "./styles/noCollectionStyles";
const NoCollection = () => {
  const classes = noCollectionStyles();

  return (
    <div className={classes.container}>
      <Typography
        align="center"
        className={classes.root}
        color="primary"
        gutterBottom
        variant="h3"
      >
        Data is not Fetched Yet!!!
      </Typography>
      <img src={searchImage} style={{ maxWidth: "250px" }} alt="search" />
      <Typography align="center" variant="body1">
        Search your symbols to fetch Tweets
        <img
          src="https://media.giphy.com/media/fsPWex2InYOJdUY2tM/giphy.gif"
          style={{ maxWidth: "50px" }}
          alt="gifImage"
        />
      </Typography>
    </div>
  );
};

export default NoCollection;
