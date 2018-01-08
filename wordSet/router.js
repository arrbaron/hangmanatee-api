const express = require("express");
const bodyParser = require("body-parser");
const { WordSet } = require("./model");
const { Card } = require("../card/model");

const router = express.Router();

router.use(bodyParser.json());

// GET
router.get("/", (req, res) => {
  console.log("getting ALL word sets");
  WordSet.find((err, wordSets) => {
    if (err) return console.error(err);
    res.json(wordSets);
    return wordSets;
  });
});

router.get("/:wordSetID", (req, res) => {
  console.log("getting word set");
  WordSet.findById(req.params.wordSetID, (err, wordSet) => {
    if (err) return console.error(err);
    res.json(wordSet);
    return wordSet;
  });
});

router.get("/:wordSetID/cards", (req, res) => {
  console.log("getting cards");
  WordSet.findById(req.params.wordSetID, (err, wordSet) => {
    if (err) return console.log(err);
    res.json(wordSet.cards);
    return wordSet.cards;
  });
});

router.get("/:wordSetID/cards/:cardID", (req, res) => {
  console.log("getting specific card");
  WordSet.findById(req.params.wordSetID, (err, wordSet) => {
    if (err) return console.log(err);
    card = wordSet.cards.id(req.params.cardID);
    res.json(card);
    return card;
  });
});

// POST
router.post("/", (req, res) => {
  console.log("adding wordset");
  res.send("created wordset");
  return WordSet.create({
    title: "new test",
    cards: {
      term: "term",
      definition: "definition"
    }
  });
});

router.post("/:wordSetID/cards", (req, res) => {
  console.log("adding card");
  res.send("created new card");
  WordSet.findById(req.params.wordSetID, (err, wordSet) => {
    if (err) return console.log(err);
    wordSet.cards.push({term: "pequito", definition: "small"});
    wordSet.save((err, updatedWordSet) => {
      if (err) return console.log(err);
      res.send(updatedWordSet);
      return updatedWordSet;
    });
  });
});

// PUT
router.put("/:wordSetID", (req, res) => {
  console.log({msg: "updating word set"});
  WordSet.findById(req.params.wordSetID, (err, wordSet) => {
    if (err) return console.log(err);
    wordSet.title = req.body.title;
    wordSet.save((err, updatedWordSet) => {
      if (err) return console.log(err);
      res.send(updatedWordSet);
    });
  });
});

router.put("/:wordSetID/cards/:cardID", (req, res) => {
  console.log("updating card");
  WordSet.findById(req.params.wordSetID, (err, wordSet) => {
    if (err) return console.log(err);
    // TODO - validate this
    updatedCard = wordSet.cards.id(req.params.cardID);
    updatedCard.term = req.body.term;
    updatedCard.definition = req.body.definition;
    wordSet.save(err => {
      if (err) return console.log(err);
      res.send(updatedCard);
    });
  });
});

// DELETE
router.delete("/:wordSetID", (req, res) => {
  console.log({msg: "deleting word set"});
  WordSet.findByIdAndRemove(req.params.wordSetID, (err, wordSet) => {
    if (err) return console.log(err);
    res.send(wordSet);
    return wordSet;
  });
});

router.delete("/:wordSetID/cards/:cardID", (req, res) => {
  console.log("deleting card");
  WordSet.findById(req.params.wordSetID, (err, wordSet) => {
    if (err) return console.log(err);
    card = wordSet.cards.id(req.params.cardID);
    card.remove();
    wordSet.save(err => {
      if (err) return console.log(err);
      res.send(card);
    });
  });
});

module.exports = { router };