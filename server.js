require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const morgan = require("morgan");
const { router: wordSetRouter } = require("./wordSet/router");
const { router: userRouter } = require("./user/router");
const { router: authRouter } = require("./auth/router");
const { localStrategy, jwtStrategy } = require("./auth/strategies");

mongoose.Promise = global.Promise;

const { PORT, DATABASE_URL } = require("./config");

const app = express();

app.use(morgan("common"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  if (req.method === 'OPTIONS') {
    return res.send(204);
  }
  next();
});

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use("/api/wordset/", wordSetRouter);
app.use("/api/auth/", authRouter);
app.use("/api/user/", userRouter);
mongoose.connect(DATABASE_URL);

const jwtAuth = passport.authenticate('jwt', { session: false });

app.get('/api/protected', jwtAuth, (req, res) => {
  return res.json({
    data: 'rosebud'
  });
});

app.get("/api/", (req, res) => {
  res.json({ok: true});
});

let server;

function runServer() {
  return new Promise((resolve, reject) => {
    server = app.listen(PORT, () => {
      console.log(`Your app is listening on port ${PORT}`);
      resolve(server);
    }).on("error", err => {
      reject(err)
    });
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    console.log("Closing server");
    server.close(err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = { app, runServer, closeServer };