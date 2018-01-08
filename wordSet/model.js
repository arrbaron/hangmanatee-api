const mongoose = require("mongoose");
const { CardSchema } = require("../card/model");

mongoose.Promise = global.Promise;

const WordSetSchema = mongoose.Schema({
  title: { type: String, required: true },
  cards: [CardSchema]
});

const WordSet = mongoose.model("WordSet", WordSetSchema);

module.exports = { WordSet };