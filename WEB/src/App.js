import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import theme from "./theme";

import io from "socket.io-client";

import Home from "./Home/Home";
import Room from "./Room/Room";

const socket = io.connect('/');

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            <Home socket={socket} />
          </Route>
          <Route path="/room" exact>
            <Room socket={socket} />
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
