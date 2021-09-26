import React, { useState } from "react";
import {
  Grid,
  Typography,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  TextField,
  MenuItem,
  Button,
} from "@material-ui/core";
import { AccountCircle, Input as InputIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    color: theme.main.color,
    backgroundColor: theme.main.backgroundColor,
  },
  main: {
    backgroundColor: theme.main.backgroundColor,
    color: theme.main.color,
    padding: "1em",
  },
  inputGrid: {
    padding: "2.5em 0",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const salas = [
  { label: "Deportes", value: "DEPORTES" },
  { label: "Cine", value: "CINE" },
  { label: "Música", value: "MUSICA" },
];

const Home = ({ socket }) => {
  const classes = useStyles();
  const history = useHistory();

  const [nombre, setNombre] = useState("");
  const [sala, setSala] = useState("");

  const clickBtn = () => {
    socket.emit('joinRoom', { nombre, sala });
    history.push("/room");
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={4} sm={4} lg={4} className={classes.main}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" display="block" align="center">
              Chat App
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} className={classes.inputGrid}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Nombre</InputLabel>
              <Input
                autoFocus
                value={nombre}
                onChange={(e) => setNombre(e?.target?.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Grid item xs={12} sm={12} lg={12} className={classes.inputGrid}>
              <TextField
                select
                value={sala}
                label="Sala"
                fullWidth
                defaultValue=""
                onChange={(e) => setSala(e?.target?.value)}
              >
                {salas &&
                  salas.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
              </TextField>
            </Grid>
            <Grid>
              <Button
                fullWidth
                color="primary"
                variant="contained"
                startIcon={<InputIcon />}
                disabled={!(nombre && sala)}
                onClick={clickBtn}
              >
                Ingresar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
