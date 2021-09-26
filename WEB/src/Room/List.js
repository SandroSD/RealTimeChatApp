import React from "react";
import {
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: "0.5em",
    margin: "0.5em",
    borderRadius: "10px",
    textAlign: "center",
    // border: "1px solid black",
    // backgroundColor: "grey",
  },
  user: {
    margin: "0.5em 0",
    textAlign: "center",
  },
  onlineStatus: {
    width: "1em",
    height: "1em",
    backgroundColor: "lightgreen",
    display: "inline-block",
    marginRight: "0.2em",
  },
  onlineName: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
}));

const users = [
  { id: 1, username: "Pepe" },
  { id: 2, username: "Rob" },
  { id: 3, username: "Matt" },
];

const UserList = () => {
  const classes = useStyle();

  const Status = () => (
    <React.Fragment>
      <span className={classes.onlineStatus}></span>
      <span className={classes.onlineName}> Online </span>
    </React.Fragment>
  );

  return (
    <Grid className={classes.root}>
      <Typography variant="h5">Online Users</Typography>
      <Divider />
      <List>
        {users.map((u, i) => (
          <ListItem key={i}>
            <ListItemAvatar>
              <Avatar
                style={{
                  alignSelf: "center",
                }}
              >
                <Person />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={u.username} secondary={<Status />} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default UserList;
