import React from "react";
import { AppBar, Grid, IconButton, Tooltip, Typography } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
  menuButton: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyle();
  const history = useHistory();

  return (
    <AppBar position="static">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography style={{ paddingLeft: '0.5em'}} variant="h5">Chat App</Typography>
        </Grid>
        <Grid item>
          <Tooltip title="Exit">
            <IconButton onClick={() => history.push('/')} color="inherit" className={classes.menuButton}>
              <ExitToApp />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
