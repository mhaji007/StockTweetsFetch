import React from "react";

import Tweets from "./Tweets/TweetsContainer";

const ShowTweets = ({ data }) => <Tweets data={data.messages} />;

export default ShowTweets;
