const express = require("express");
const socket = require("socket.io");
const cors = require("cors");

const app = express();

require("dotenv").config();

const { PORT } = process.env;

app.use(express());

app.use(cors());

const server = app.listen(
  PORT,
  console.log(`Servidor corriendo en el puerto: ${PORT} `)
);

module.exports.io = socket(server);
require("./socket");
