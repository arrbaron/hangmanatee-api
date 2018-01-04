const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.json());

// get a game
router.get("/", (req, res) => {
  res.json({msg: "getting word set"});
});

router.put("/:id", (req, res) => {
  res.json({msg: "updating word set"});
});

router.post("/", (req, res) => {
  res.json({msg: "adding word set"});
});

router.delete("/:id", (req, res) => {
  res.json({msg: "deleted word set"});
});

module.exports = { router };