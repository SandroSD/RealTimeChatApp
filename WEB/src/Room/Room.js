import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../Header/Header";
import List from "./List";
import Chat from "./Chat";

const useStyle = makeStyles((theme) => ({
  root: {},
}));

const Sala = ({ socket }) => {
  const classes = useStyle();
  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justifyContent="space-around"
      alignItems="stretch"
    >
      <Grid item xs={12} sm={12} lg={12}>
        <Header />
      </Grid>
      <Grid item xs={12} sm={12} lg={12} style={{ height: "100%" }}>
        <Grid container justifyContent="center" alignItems="flex-start">
          <Grid item xs={4} sm={4} lg={2}>
            <List socket={socket} />
          </Grid>
          <Grid item xs={8} sm={8} lg={6}>
            <Chat socket={socket} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sala;
