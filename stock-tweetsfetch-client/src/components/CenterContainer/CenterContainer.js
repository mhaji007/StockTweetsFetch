import React, { useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { isEmpty } from "lodash";
import { Grid, TextField } from "@material-ui/core";
import _ from "lodash";
import { findTweets } from "./data";
import { NoCollection, NoActivate, ShowTweets } from "./components";
import { centerContainerStyles } from "./styles/centerContainerStyles";

const Center = ({ master, selection }) => {
  const classes = centerContainerStyles();

  const [filterTweets, setFilterTweets] = React.useState();

  useEffect(() => {
    setFilterTweets(selection);
  }, [selection]);

  //this method is used for search tweets
  const handleTweetSearch = (event) => {
    const { value: tweet } = event.target;
    if (isEmpty(tweet)) {
      setFilterTweets(selection);
      return;
    }
    if (!selection) {
      return null;
    }
    var foundTweets = _.filter(selection.messages, function (data) {
      return data.user.name.toLowerCase().startsWith(tweet.toLowerCase());
    });
    setFilterTweets({ messages: foundTweets });
  };
  const activeContent = (() => {
    //if there is no content will show No Collection
    //if symbol but not selected will show NoActivate component
    //else will show ShowTweets component
    if (isEmpty(master)) return <NoCollection />;
    if (isEmpty(filterTweets)) return <NoActivate master={master} />;
    return <ShowTweets data={filterTweets} />;
  })();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={findTweets.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Tweets"
                margin="normal"
                variant="outlined"
                onChange={(event) => handleTweetSearch(event)}
              />
            )}
          />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item md={12}>
          {activeContent}
        </Grid>
      </Grid>
    </div>
  );
};

export default Center;
