const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.json());

// get a game
router.get("/", (req, res) => {
  res.json({msg: "getting game"});
});

router.get("/:id", (req, res) => {
  res.json({msg: "getting specific game"});
});

module.exports = { router };