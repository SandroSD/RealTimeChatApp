import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  makeStyles,
  Box,
  Typography,
  Divider,
  Input,
  Button,
  Paper,
  TextField,
} from "@material-ui/core";
import { Send } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0.5em",
    margin: "0.5em",
    borderRadius: "10px",
    // border: "1px solid black",
    // backgroundColor: "grey",
    height: "40em",
  },
  boxMesagges: {
    padding: "0.5em",
    margin: "0.5em",
    // borderRadius: "10px",
    // border: "1px solid black",
    // backgroundColor: "yellow",
    height: "65vh",
    maxHeight: "65vh",
    overflowY: "auto",
  },
  actions: {
    padding: "0.5em",
    margin: "0.5em",
    borderRadius: "10px",
    // border: "1px solid black",
    // backgroundColor: "green",
  },
  writeMessage: {},
  username: {
    width: "100%",
    textAlign: "start",
  },
  message: {
    padding: "0.5em",
    margin: "0.5em",
    borderRadius: "15px",
  },
  messageLeft: {
    backgroundColor: "#e3f2fd",
  },
  messageRight: {
    backgroundColor: "#90caf9",
  },
}));

const Chat = ({ socket }) => {
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on("listen", (data) => {
      console.log(data);
      // //decypt the message
      // console.log(data);
      // const ans = to_Decrypt(data.text, data.username);
      // dispatch(process(false, ans, data.text));
      // console.log(ans);
      // let temp = messages;
      // temp.push({
      //   userId: data.userId,
      //   username: data.username,
      //   text: ans,
      // });
      // setMessages([...temp]);
    });
  }, [socket]);

  // useEffect(() => {
  //   messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  const sendMessage = () => {};

  return (
    <Grid className={classes.root}>
      <Typography variant="h5">User in Room</Typography>
      <Divider />
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="stretch"
      >
        <Grid item className={[classes.boxMesagges, "a"].join(" ")}>
          {messages.map((m, i) => {
            return (
              <Grid
                key={i}
                container
                direction="column"
                justifyContent="center"
                alignItems={m.user === "a" ? "flex-start" : "flex-end"}
              >
                <Grid
                  className={[
                    classes.message,
                    m.user === "a" ? classes.messageLeft : classes.messageRight,
                  ].join(" ")}
                >
                  <Grid item>
                    <Typography variant="body1">{m.data}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="caption">{m.user}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Grid item className={classes.actions} xs={12} sm={12} lg={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={10} sm={10} lg={10}>
              <TextField
                fullWidth
                multiline
                rows={2}
                placeholder="Write message..."
              />
            </Grid>
            <Grid item xs={2} sm={2} lg={2} style={{ textAlign: "center" }}>
              <Button color="primary" variant="contained" startIcon={<Send />}>
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Chat;
