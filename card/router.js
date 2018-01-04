const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.json({msg: "getting cards"});
});

router.get("/:id", (req, res) => {
  res.json({msg: "getting specific card"});
});

router.post("/", (req, res) => {
  res.json({msg: "adding new card"});
});

router.put("/:id", (req, res) => {
  res.json({msg: "updating card"});
});

router.delete("/:id", (req, res) => {
  res.json({msg: "deleting card"});
});

module.exports = { router };