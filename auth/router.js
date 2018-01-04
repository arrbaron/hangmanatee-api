const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.json());

router.post("/login", (req, res) => {
  res.json({msg: "logging in"});
});

router.post("/register", (req, res) => {
  res.json({msg: "registering"});
});

module.exports = { router };