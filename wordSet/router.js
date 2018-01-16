const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const { WordSet } = require("./model");
const { Card } = require("../card/model");

const router = express.Router();

router.use(bodyParser.json());

const jwtAuth = passport.authenticate('jwt', { session: false });

// GET
router.get("/:owner/all", (req, res) => {
  console.log("getting ALL word sets");
  WordSet.find({ owner: req.params.owner }, (err, wordSets) => {
    if (err) return console.error(err);
    res.json(wordSets);
  });
});

router.get("/:owner/last", (req, res) => {
  console.log("getting last word set from user");
  WordSet.find({ owner: req.params.owner }, (err, wordSets) => {
    if (err) return console.error(err);
    res.json(wordSets[wordSets.length -1]);
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
router.post("/:owner/", jwtAuth, (req, res) => {
  console.log("adding wordset");
  // res.send("created wordset");
  WordSet.create({
    title: "new test",
    cards: {
      term: "term",
      definition: "definition",
      showEdit: false,
      showTerm: true
    },
    owner: req.params.owner
  })
  .then(wordSet => res.json(wordSet))
  .catch(err => console.log(err));
});

router.post("/:wordSetID/cards", jwtAuth, (req, res) => {
  console.log("adding card");
  // res.send("created new card");
  WordSet.findById(req.params.wordSetID, (err, wordSet) => {
    if (err) return console.log(err);
    wordSet.cards.push({term: "term", definition: "definition", showEdit: false, showTerm: true});
    wordSet.save((err, updatedWordSet) => {
      if (err) return console.log(err);
      // return the newest card
      res.send(updatedWordSet.cards[updatedWordSet.cards.length - 1]);
    });
  });
});

// PUT
router.put("/:wordSetID", jwtAuth, (req, res) => {
  console.log({msg: "updating word set"});
  WordSet.findById(req.params.wordSetID, (err, wordSet) => {
    if (err) return console.log(err);
    console.log("wordSet.title =>" + req.body.title)
    wordSet.title = req.body.title;
    wordSet.save((err, updatedWordSet) => {
      if (err) return console.log(err);
      res.send(updatedWordSet);
    });
  });
});

router.put("/:wordSetID/cards/:cardID", jwtAuth, (req, res) => {
  console.log("updating card");
  WordSet.findById(req.params.wordSetID, (err, wordSet) => {
    if (err) return console.log(err);
    // TODO - validate this
    updatedCard = wordSet.cards.id(req.params.cardID);
    if (req.body.term) updatedCard.term = req.body.term;
    if (req.body.definition) updatedCard.definition = req.body.definition;
    wordSet.save(err => {
      if (err) return console.log(err);
      res.send(updatedCard);
    });
  });
});

// DELETE
router.delete("/:wordSetID", jwtAuth, (req, res) => {
  console.log({msg: "deleting word set"});
  WordSet.findByIdAndRemove(req.params.wordSetID, (err, wordSet) => {
    if (err) return console.log(err);
    res.send(wordSet);
    return wordSet;
  });
});

router.delete("/:wordSetID/cards/:cardID", jwtAuth, (req, res) => {
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