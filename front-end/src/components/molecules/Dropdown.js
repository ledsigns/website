import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Icon from "@material-ui/icons/ArrowDropDownCircle";
export default props => (
  <div>
    <List component="nav">
      <ListItem
        button
        aria-haspopup="true"
        aria-controls="lock-menu"
        aria-label="Search By..."
        onClick={props.handleClickListItem}
      >
        <ListItemText secondary={props.options[props.selectedIndex]}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            Search By &nbsp;
            <Icon />
          </div>
        </ListItemText>
      </ListItem>
    </List>
    <Menu
      id="lock-menu"
      anchorEl={props.anchorEl}
      open={Boolean(props.anchorEl)}
      onClose={props.handleClose}
    >
      {props.options.map((option, index) => (
        <MenuItem
          key={option}
          selected={index === props.selectedIndex}
          onClick={event => props.handleMenuItemClick(event, index)}
        >
          {option}
        </MenuItem>
      ))}
    </Menu>
  </div>
);
