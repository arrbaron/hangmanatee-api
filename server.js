require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const { PORT, DATABASE_URL } = require("./config");

const app = express();

// app.use(express.static("public"));
app.use(morgan("common"));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  if (req.method === 'OPTIONS') {
    return res.send(204);
  }
  next();
});

app.get("/api/*", (req, res) => {
  res.json({ok: true});
});

app.listen(PORT, () => console.log("Listening on port " + PORT));

module.exports = {app};