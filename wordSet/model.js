const mongoose = require("mongoose");
const { CardSchema } = require("../card/model");

mongoose.Promise = global.Promise;

const WordSetSchema = mongoose.Schema({
  title: { type: String, required: true },
  cards: [CardSchema],
  owner: { type: String, required: true }
});

const WordSet = mongoose.model("WordSet", WordSetSchema);

module.exports = { WordSet };