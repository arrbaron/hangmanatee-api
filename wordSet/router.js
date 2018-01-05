const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.json());

// GET
router.get("/:wordSetID", (req, res) => {
  res.json({msg: "getting word set"});
});

router.get("/:wordSetID/cards", (req, res) => {
  res.json({msg: "getting cards"});
});

router.get("/:wordSetID/cards/:cardID", (req, res) => {
  res.json({msg: "getting specific card"});
});

// POST
router.post("/", (req, res) => {
  res.json({msg: "adding word set"});
});

router.post("/:wordSetID/cards", (req, res) => {
  res.json({msg: "adding card"});
});

// PUT
router.put("/:wordSetID", (req, res) => {
  res.json({msg: "updating word set"});
});

router.put("/:wordSetID/cards/:cardID", (req, res) => {
  res.json({msg: "updating card"});
});

// DELETE
router.delete("/:wordSetID", (req, res) => {
  res.json({msg: "deleting word set"});
});

router.delete("/:wordSetID/cards/:cardID", (req, res) => {
  res.json({msg: "deleting card"});
});

module.exports = { router };