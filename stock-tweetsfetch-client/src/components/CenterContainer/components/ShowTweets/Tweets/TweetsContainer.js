import React from "react";
import Grid from "@material-ui/core/Grid";
import CardComponent from "./CardComponent/CardComponent";

function TweetsContainer({ data }) {
  const tweetCards = (
    <Grid container justify="center">
      {data.map((tweet) => (
        <Grid item key={tweet.id} lg={10} md={10} xs={10}>
          <br />
          <CardComponent tweet={tweet} />
          <br />
        </Grid>
      ))}
    </Grid>
  );

  return data.length ? tweetCards : null;
}

export default TweetsContainer;
