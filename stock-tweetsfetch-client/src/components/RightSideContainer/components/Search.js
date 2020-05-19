import React from "react";

import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import searchStyles from "./styles/searchStyles";
import CircularProgress from "@material-ui/core/CircularProgress";

function Search({ handleSearch, isLoading, userInput, setUserInput }) {
  const classes = searchStyles();

  const handleChange = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleSearch(event);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          classes={{
            root: classes.inputRoot,
            input: classes.inputInnerContainer,
          }}
          disabled={isLoading}
          onKeyDown={handleKeyPress}
          onChange={handleChange}
          placeholder="AAPL, TSLA"
          value={userInput}
        />
      </div>
      <div className={classes.searchButton}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          disabled={!userInput.length || isLoading}
          onClick={handleSearch}
          className={classes.button}
        >
          {!isLoading && "Search"}
          {isLoading && <CircularProgress color="secondary" size={20} />}
        </Button>
      </div>
    </div>
  );
}
export default Search;
