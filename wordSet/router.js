const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.json());

router.get("/:id", (req, res) => {
  res.json({msg: "getting word set"});
});

router.post("/", (req, res) => {
  res.json({msg: "adding word set"});
});

router.put("/:id", (req, res) => {
  res.json({msg: "updating word set"});
});

router.delete("/:id", (req, res) => {
  res.json({msg: "deleting word set"});
});

module.exports = { router };