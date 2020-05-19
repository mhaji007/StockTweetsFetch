import React from "react";

/* Material-UI Components */
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";

import symbolListStyles from "./styles/symbolListStyles";

function StockSymbol({
  activeSymbol,
  isLoading,
  master,
  removeSymbol,
  setActiveSymbol,
  handleClose,
}) {
  const classes = symbolListStyles();
  return (
    <List className={classes.root}>
      {Object.entries(master).map(([id, val]) => (
        <div key={id}>
          <ListItem
            alignItems="flex-start"
            button
            selected={id === activeSymbol}
            disabled={isLoading}
            onClick={() => {
              handleClose();
              setActiveSymbol(id);
            }}
          >
            <ListItemText
              primary={val.symbol.symbol}
              secondary={val.symbol.title}
            />
            <ListItemSecondaryAction>
              <Tooltip title="Remove tweets" placement="right">
                <span>
                  <IconButton
                    edge="end"
                    disabled={isLoading}
                    onClick={() => removeSymbol(id)}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                </span>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
}

export default StockSymbol;
